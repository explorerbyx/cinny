import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.scss';

import Text from '../../atoms/text/Text';

// import CinnySvg from '../../../../public/res/svg/cinny.svg';
import SxExplorerSvg from '../../../../public/res/svg/sx_explorer-logo-vector.svg';

function Welcome({ mssg }) {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img
          className="app-welcome__logo noselect"
          src={SxExplorerSvg}
          alt="Santander X Explorer logo"
        />
        {/* <Text className="app-welcome__heading" variant="h1" weight="medium" primary>Welcome to Cinny</Text> */}
        {mssg === null ? (
          <Text className="app-welcome__heading" variant="h2" weight="light" primary>
            Bienvenid@m, Bem-vindo, Welcome!
          </Text>
        ) : (
          ''
        )}
        {mssg === 'hub' ? (
          <Text className="app-welcome__heading" variant="h2" weight="light" primary>
            Bienvenid@/Bem-vindo al/ao Hub!
          </Text>
        ) : (
          ''
        )}
        {/* <Text className="app-welcome__subheading" variant="s1">Yet another matrix client</Text> */}
        {mssg === 'r2e' ? (
          <div className="app-welcome-msg">
            <br />
            <p>¡Te damos la bienvenida al Chat de Road to Explorer! ¿Cómo se utiliza?</p>
            <p>
              Localiza las salas del Chat: las tienes a la izquierda,en tu espacio de trabajo. Entra
              en la sala que más te interese (hay tres: Bienvenida, General y Conecta) para que
              empiece la magia del networking.
            </p>
            <ul>
              <li>
                Utiliza la sala Bienvenida para presentarte y para subir el PDF con tus datos que
                rellenarás en la sección “Bienvenida”.
              </li>
              <br />
              <li>
                Utiliza la sala General para las videollamadas en las que resolverás tus dudas.
                Recuerda que, además de las programadas, puedes utilizar esta sala siempre que
                quieras para reunirte con las personas con las que hayas hecho contacto.
              </li>
              <br />
              <li>
                Utiliza la sala Conecta para, al final del programa y una vez localizados los
                proyectos que más se ajustan al tuyo, encontrar un grupo de personas afines o
                complementarias a tu idea y con las que puedas formar un equipo.
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

Welcome.defaultProps = {
  mssg: null,
};

Welcome.propTypes = {
  mssg: PropTypes.string,
};

export default Welcome;
