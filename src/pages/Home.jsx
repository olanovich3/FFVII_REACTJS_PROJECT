import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import Palette from '../styles/Palette';
import DivFlex from '../ui-components/Divflex';
import Heading from '../ui-components/Heading';
import Hero from '../ui-components/Hero';
import Main from '../ui-components/Main';
import TextHome from '../ui-components/TextHome';

const Home = () => {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return (
    <Main homeheight={'100%'}>
      <Heading headcolor={`${Palette.main.primary}`} as={'h1'} size={'xl'}></Heading>
      <DivFlex variant="transparent" padding={'2rem 4rem'}>
        <Hero width={'50%'} height={'400px'} />
        <TextHome
          width={'50%'}
          variant="transparent"
          color="whitesmoke"
          padding={'50px'}
          text="Final Fantasy VII, es un videojuego de rol desarrollado y publicado por la empresa Square para la plataforma PlayStation. Publicado en 1997, se trata de la séptima entrega de la serie Final Fantasy y la primera de la saga en presentar gráficos tridimensionales, mostrando personajes completamente renderizados sobre escenarios prerrenderizados. El argumento de Final Fantasy VII se centra en el protagonista Cloud Strife, un mercenario que inicialmente se une al grupo ecoterrorista AVALANCHA para detener el control mundial de la corporación Shinra que está drenando la vida del planeta para usarla como fuente de energía. Final Fantasy VII fue dirigido por Yoshinori Kitase, escrito por Kazushige Nojima y Kitase, y producido por Hironobu Sakaguchi.  Ha sido reconocido de manera retrospectiva como el juego que popularizó los videojuegos de rol japoneses fuera de su mercado natal, y por contribuir fuertemente al éxito de PlayStation. Ha sido frecuentemente posicionado entre los mejores juegos de la historia en diversas listas de videojuegos. La popularidad del juego provocó que Square produjera una serie de secuelas y precuelas englobadas en una recopilación de material multimedia conocida como Compilation of Final Fantasy VII. Tras una década de rumores y especulaciones, una nueva versión en alta definición completamente rehecha del juego fue anunciada en la Electronic Entertainment Expo 2015 para PlayStation 4, además de otras plataformas aún por confirmar. La versión con todos los gráficos remasterizados y un nuevo sistema de juego, finalmente salió a las luz el 10 de abril de 2020."
        />
      </DivFlex>
    </Main>
  );
};
export default Home;
