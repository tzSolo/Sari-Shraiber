import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/general/footer';
import MainContainer from './components/general/main-container';
import Header from './components/general/header/header';
import UserProvider from './context/userContext';


function App() {
  return <>
    <UserProvider>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </UserProvider>
  </>
}

export default App;