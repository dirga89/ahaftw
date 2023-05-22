//import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Landing from './pages/Landing'
import { Navigation } from './Components'

function App() {

  const location = useLocation();
  return (
    <div className='flex flex-col h-screen justify-between'>
      <header className=''>
        <Navigation />
      </header>

      <main className='flex flex-row justify-center'>
          {location.pathname==='/' && <Landing />}
          <div id='detail'>
            <Outlet />
          </div>
          {/* <Login /> */}

      </main>
        
      <footer className=''>
       
      </footer>
    </div>
  );
}

export default App;
