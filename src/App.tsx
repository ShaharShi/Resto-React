import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from './components/containers/ui-components/header';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './components/containers/appRouter';

const initialState: any = {meals: ["a", "b"]}
export const MealsContext: any = React.createContext(null)

function App() {
  const [globalState, setGlobalState] = useState(initialState)

  return (
    <Router>
      <MealsContext.Provider value={[globalState, setGlobalState]}>
        <div className={'container'}>
          <NavBarApp />
          <AppRouter/>
        </div>
      </MealsContext.Provider>
    </Router>
  );
}

export default App;
