import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/general/footer';
import MainContainer from './components/general/main-container';
import Header from './components/general/header/header';
import RoleProvider from './context/role-context';


function App() {
  return <>
    <RoleProvider>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </RoleProvider>
  </>
}

export default App;