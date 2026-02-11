import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/general/footer';
import MainContainer from './components/general/main-container';
import Header from './components/general/header/header';

function App() {
  return <>
    <Header />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </>
}

export default App;