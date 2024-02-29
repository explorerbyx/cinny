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
            ¡Bienvenid@! Bem-vindo(a)! Welcome!
          </Text>
        ) : (
          ''
        )}
        {mssg === 'hub' ? (
          <Text className="app-welcome__heading" variant="h2" weight="light" primary>
            ¡Bienvenid@! Bem-vindo(a)! Welcome!
          </Text>
        ) : (
          ''
        )}
        {/* <Text className="app-welcome__subheading" variant="s1">Yet another matrix client</Text> */}
        {mssg === 'community' ? (
          <div className="app-welcome-msg">
            <p>
              La comunidad alumni de Santander X Explorer cuenta con un nuevo espacio en la que los
              participantes graduados del programa se conectan con el objetivo de hacer networking y
              mejorar el mundo a través del emprendimiento.
            </p>
            <p>
              A comunidade de ex-alunos do Santander X Explorer tem um novo espaço onde os graduados
              do programa se conectam com o objetivo de fazer networking e melhorar o mundo por meio
              do empreendedorismo.
            </p>
            <p>
              The Santander X Explorer alumni community has a new space where graduates of the
              programme connect with the aim of networking and improving the world through
              entrepreneurship.
            </p>
          </div>
        ) : (
          ''
        )}
        {/* <Text className="app-welcome__subheading" variant="s1">Yet another matrix client</Text> */}
        {mssg === 'hub' ? (
          <div className="app-welcome-msg">
            <p>
              Explorer Hub es la comunidad de aprendizaje en la que Coordinadores, Expertos y Alumni
              Explorer se conectan con el objetivo de mejorar la experiencia de los Explorers en su
              paso por el programa.
            </p>
            <p>
              Explorer Hub é a comunidade de aprendizagem onde Coordenadores, Expertos e Ex-Alunos
              do Explorer se conectam com o objetivo de melhorar a experiência dos Explorers durante
              o período em que estão no programa.
            </p>
            <p>
              Explorer Hub is the learning community where Coordinators, Experts and Explorer Alumni
              connect with the aim of improving the experience of Explorers during their time on the
              programme.
            </p>
          </div>
        ) : (
          ''
        )}
        {mssg === 'r2e' ? (
          <div className="app-welcome-msg">
            <br />
            <p>
              &iexcl;Te damos la bienvenida al Chat de Road to Explorer! &iquest;C&oacute;mo se
              utiliza?
            </p>
            <p>
              Localiza las salas del Chat: las tienes a la izquierda,en tu espacio de trabajo. Entra
              en la sala que m&aacute;s te interese (hay tres: Bienvenida, General y Conecta) para
              que empiece la magia del networking.
            </p>
            <ul>
              <li>
                Utiliza la sala Bienvenida para presentarte y para subir el PDF con tus datos que
                rellenar&aacute;s en la secci&oacute;n &ldquo;Bienvenida&rdquo;.
              </li>
              <br />
              <li>
                Utiliza la sala General para comentar dudas, organizar videollamadas (aqu&iacute;
                podr&eacute;is establecer una fecha y hora, por ejemplo) o, simplemente, para
                charlar con tus compa&ntilde;eros.
              </li>
              <br />
              <li>
                Utiliza la sala Conecta para, al final del programa y una vez localizados los
                proyectos que m&aacute;s se ajustan al tuyo, encontrar un grupo de personas afines o
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
