import '../src/App.css';

import { Outlet } from 'react-router-dom';

import LayaoutGeneral from './Layout/LayoutGeneral';
import Footer from './ui-components/Footer';
import Header from './ui-components/Header';
import Image from './ui-components/Image';
import NavBar from './ui-components/NavBar';

function App() {
  return (
    <div className="App">
      <LayaoutGeneral>
        <Header align={'center'} height={'35vh'} color={'transparent'}>
          <Image
            width={'550px'}
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677165723/cropped-FFVII_logo_w4hdry.png"
            alt="logo"
          />
          <NavBar
            height={'8px'}
            justify={'flex-end'}
            padding={'2rem 4rem'}
            gap={'1.5rem'}
          />
        </Header>
        <Outlet></Outlet>
        <Footer justify={'space-between'} padding={'2rem 4rem'}></Footer>
      </LayaoutGeneral>
    </div>
  );
}

export default App;
