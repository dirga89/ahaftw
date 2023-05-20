//import './App.css';
import { Login }  from './pages/Login'
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <header className=''>
        <Navigation />
      </header>

      <main className='flex flex-row justify-center'>


        <Login />


      </main>
        
      <footer className=''>
       
      </footer>
    </div>
  );
}

export default App;
