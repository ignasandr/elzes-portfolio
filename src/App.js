import './App.css';
import { useState } from 'react';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';

const SECTIONS_INITIAL = [
    { id: 1, name: '2019', active: false },
    { id: 2, name: '2020', active: false },
    { id: 3, name: '2021', active: false },
    { id: 4, name: 'Molio dirbiniai', active: false }
];

function App() {
  const [ sections, setSections ] = useState(SECTIONS_INITIAL); 

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
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
