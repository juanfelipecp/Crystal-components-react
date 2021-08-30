import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Productos from './pages/Productos'
import M_v from './pages/M_v'
import Proveedores from './pages/Proveedores'
import Mercadoactual from './pages/Mercadoactual'
import Noticias from './pages/Noticias'
import Parcial from './pages/Parcial'
import Register from './pages/Register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/mv" component={M_v} />
        <Route exact path="/productos/:id" component={Productos} />
        <Route exact path="/proveedores" component={Proveedores} />
        <Route exact path="/Mercadoactual" component={Mercadoactual} />
        <Route exact path="/Noticias" component={Noticias} />
        <Route exact path="/Parcial" component={Parcial} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;


