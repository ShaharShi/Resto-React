import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from './components/containers/ui-components/header';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './components/containers/appRouter';

function App() {
  return (
    <Router>
      <div className={'container'}>
        <NavBarApp />
        <AppRouter/>
      </div>
    </Router>
  );
}

export default App;
