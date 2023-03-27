import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
// import { BrowserRouter ,Routes,Route} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <News pageSize={5} country="us" key="business" category="business"/>
      </>
      // <BrowserRouter>
     
      //   <Routes>
      //     <Route  exact path='/business'><News pageSize={5} country="us" key="business" category="business"/></Route>
      //     <Route  exact path='/entertainment'><News pageSize={5} country="us" key="entertainment" category="entertainment"/></Route>
      //     <Route  exact path='/technology'><News pageSize={5} country="us" key="technology" category="technology"/></Route>
      //     <Route  exact path='/sports'><News pageSize={5} country="us" key="sports" category="sports"/></Route>
      //     <Route  exact path='/health'><News pageSize={5} country="us" key="health" category="health"/></Route>
      //   </Routes>
      // </BrowserRouter>

    )
  }
}

