import logo from './logo.svg';
import './App.css';
import { Addition } from './Addition';

const App = () => {
  return (
    <>
      <Addition numberOne={14} numberTwo={6} />
      <Addition numberOne={22} numberTwo={11} />  
      <Addition numberOne={28} numberTwo={.042} />    
    </>
  );
};

export default App;
