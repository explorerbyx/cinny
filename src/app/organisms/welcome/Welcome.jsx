import React from 'react';
import './Welcome.scss';

import Text from '../../atoms/text/Text';

// import CinnySvg from '../../../../public/res/svg/cinny.svg';
import SxExplorerSvg from '../../../../public/res/svg/sx_explorer-logo-vector.svg';

function Welcome() {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img
          className="app-welcome__logo noselect"
          src={SxExplorerSvg}
          alt="Santander X Explorer logo"
        />
        {/* <Text className="app-welcome__heading" variant="h1" weight="medium" primary>Welcome to Cinny</Text> */}
        <Text className="app-welcome__heading" variant="h2" weight="light" primary>
          Bienvenid@, Bem-vindo, Welcome!
        </Text>
        {/* <Text className="app-welcome__subheading" variant="s1">Yet another matrix client</Text> */}
      </div>
    </div>
  );
}

export default Welcome;
