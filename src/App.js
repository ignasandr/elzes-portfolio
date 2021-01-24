import './App.css';
import { useState } from 'react';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import { SECTIONS } from './assets/photos'

function App() {
  const [ sections, setSections ] = useState(SECTIONS); 

  const handleClick = id => {
    setSections(
      sections.map(section => 
          section.id === id
          ? {...section, active: true}
          : {...section, active: false}
        )
    )
  }

  return (
    <div className="App">
        <Header sections={sections} handleClick={handleClick}/>
        <Switch>
          <Route exact path="/" render={() => <Home sections={sections} handleClick={handleClick}/>}/>
        </Switch>
    </div>
  );
}

export default App;
