import React from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Navigationmenu from './components/navigation-menu/NavigationMenu';
import Footer from './components/footer/Footer';
import MainContainer from './components/main-container/MainContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div className="App wrapper">
        <NavigationBar />
        <Navigationmenu />
        <MainContainer />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
