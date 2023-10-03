import { MarketHeader } from '@market/react';
import SquareLogo from './assets/SquareLogo.svg';
import NextSteps from './components/NextSteps';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="header">
        <img src={SquareLogo} alt="Square logo" className="logo" />
        <MarketHeader>
          <h1 className="display-20 title">Hello, Square.</h1>
        </MarketHeader>
        <h2 className="subtitle">Welcome to your new web app.</h2>
      </div>
      <NextSteps />
    </div>
  );
};

export default App;
