import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DrawerHeader.scss';

import { twemojify } from '../../../util/twemojify';

import initMatrix from '../../../client/initMatrix';
import cons from '../../../client/state/cons';
import {
  openPublicRooms,
  openCreateRoom,
  openSpaceManage,
  openJoinAlias,
  openSpaceAddExisting,
  openInviteUser,
  openReusableContextMenu,
} from '../../../client/action/navigation';
import { getEventCords } from '../../../util/common';

import { blurOnBubbling } from '../../atoms/button/script';

import Text from '../../atoms/text/Text';
import RawIcon from '../../atoms/system-icons/RawIcon';
import Header, { TitleWrapper } from '../../atoms/header/Header';
import IconButton from '../../atoms/button/IconButton';
import { MenuItem, MenuHeader } from '../../atoms/context-menu/ContextMenu';
import SpaceOptions from '../../molecules/space-options/SpaceOptions';

import PlusIC from '../../../../public/res/ic/outlined/plus.svg';
import HashPlusIC from '../../../../public/res/ic/outlined/hash-plus.svg';
import HashGlobeIC from '../../../../public/res/ic/outlined/hash-globe.svg';
import HashSearchIC from '../../../../public/res/ic/outlined/hash-search.svg';
import SpacePlusIC from '../../../../public/res/ic/outlined/space-plus.svg';
import ChevronBottomIC from '../../../../public/res/ic/outlined/chevron-bottom.svg';

export function HomeSpaceOptions({ spaceId, afterOptionSelect }) {
  const mx = initMatrix.matrixClient;
  const room = mx.getRoom(spaceId);
  const [isAdmin, setAdmin] = useState(undefined); // State to store the data

  useEffect(() => {
    async function fetchData() {
      try {
        const mx2 = initMatrix.matrixClient;
        const isAnAdmin = await mx2.isSynapseAdministrator();
        setAdmin(isAnAdmin ? 'admin' : 'user');
      } catch (error) {
        setAdmin('user');
      }
    }
    fetchData();
  }, []); // Empty dependency array means this runs once after the initial render

  if (!isAdmin) {
    return <div> </div>; // Render while data is loading
  }

  const canManage = room
    ? room.currentState.maySendStateEvent('m.space.child', mx.getUserId())
    : isAdmin === 'admin';

  return (
    <>
      <MenuHeader>Add rooms or spaces</MenuHeader>
      <MenuItem
        iconSrc={SpacePlusIC}
        onClick={() => {
          afterOptionSelect();
          openCreateRoom(true, spaceId);
        }}
        disabled={!canManage}
      >
        Create new space
      </MenuItem>
      <MenuItem
        iconSrc={HashPlusIC}
        onClick={() => {
          afterOptionSelect();
          openCreateRoom(false, spaceId);
        }}
        disabled={!canManage}
      >
        Create new room
      </MenuItem>
      {!spaceId && (
        <MenuItem
          iconSrc={HashGlobeIC}
          onClick={() => {
            afterOptionSelect();
            openPublicRooms();
          }}
        >
          Explore public rooms
        </MenuItem>
      )}
      {!spaceId && (
        <MenuItem
          iconSrc={PlusIC}
          onClick={() => {
            afterOptionSelect();
            openJoinAlias();
          }}
        >
          Join with address
        </MenuItem>
      )}
      {spaceId && (
        <MenuItem
          iconSrc={PlusIC}
          onClick={() => {
            afterOptionSelect();
            openSpaceAddExisting(spaceId);
          }}
          disabled={!canManage}
        >
          Add existing
        </MenuItem>
      )}
      {spaceId && (
        <MenuItem
          onClick={() => {
            afterOptionSelect();
            openSpaceManage(spaceId);
          }}
          iconSrc={HashSearchIC}
        >
          Manage rooms
        </MenuItem>
      )}
    </>
  );
}
HomeSpaceOptions.defaultProps = {
  spaceId: null,
};
HomeSpaceOptions.propTypes = {
  spaceId: PropTypes.string,
  afterOptionSelect: PropTypes.func.isRequired,
};

function DrawerHeader({ selectedTab, spaceId }) {
  const mx = initMatrix.matrixClient;
  const tabName = selectedTab !== cons.tabs.DIRECTS ? 'Home' : 'Direct messages';

  const isDMTab = selectedTab === cons.tabs.DIRECTS;
  const room = mx.getRoom(spaceId);
  const spaceName = isDMTab ? null : room?.name || null;

  const openSpaceOptions = (e) => {
    e.preventDefault();
    openReusableContextMenu('bottom', getEventCords(e, '.header'), (closeMenu) => (
      <SpaceOptions roomId={spaceId} afterOptionSelect={closeMenu} />
    ));
  };

  const openHomeSpaceOptions = (e) => {
    e.preventDefault();
    openReusableContextMenu('right', getEventCords(e, '.ic-btn'), (closeMenu) => (
      <HomeSpaceOptions spaceId={spaceId} afterOptionSelect={closeMenu} />
    ));
  };

  return (
    <Header>
      {spaceName ? (
        <button
          className="drawer-header__btn"
          onClick={openSpaceOptions}
          type="button"
          onMouseUp={(e) => blurOnBubbling(e, '.drawer-header__btn')}
        >
          <TitleWrapper>
            <Text variant="s1" weight="medium" primary>
              {twemojify(spaceName)}
            </Text>
          </TitleWrapper>
          <RawIcon size="small" src={ChevronBottomIC} />
        </button>
      ) : (
        <TitleWrapper>
          <Text variant="s1" weight="medium" primary>
            {tabName}
          </Text>
        </TitleWrapper>
      )}

      {isDMTab && (
        <IconButton onClick={() => openInviteUser()} tooltip="Start DM" src={PlusIC} size="small" />
      )}
      {!isDMTab && (
        <IconButton
          onClick={openHomeSpaceOptions}
          tooltip="Add rooms/spaces"
          src={PlusIC}
          size="small"
        />
      )}
    </Header>
  );
}

DrawerHeader.defaultProps = {
  spaceId: null,
};
DrawerHeader.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  spaceId: PropTypes.string,
};

export default DrawerHeader;
