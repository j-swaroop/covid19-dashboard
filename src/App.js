import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import StateSpecificDetails from './components/StateSpecificDetails'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StateSpecificDetails} />
    <Route component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
