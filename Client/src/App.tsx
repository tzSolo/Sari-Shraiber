import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/general/footer';
import MainContainer from './components/general/main-container';
import Header from './components/general/header/header';
import UserProvider from './context/userContext';
import LinkProvider from './context/linkContext';


function App() {
  return <>
    <UserProvider>
      <LinkProvider>
        <Header />
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Footer />
      </LinkProvider>
    </UserProvider>
  </>
}

export default App;