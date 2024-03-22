import logo from './logo.svg';
import './App.css';
import { Route , Routes,BrowserRouter } from 'react-router-dom';
import GithubLogin from './component/Login/GithubLogin.tsx';
import MainScreen from './component/Main/MainScreen.tsx';
import CrossBoard from './component/Cross/CrossBoard.tsx';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CrossBoard />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
