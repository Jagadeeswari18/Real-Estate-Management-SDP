import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog" 
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../login/Login"
import Registration from "../registration/Registration"
import Admin from "../AdminPanel/Admin" // Import the new AdminPanel component

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />

          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registration' component={Registration} />
          
          {/* Add the new route for the admin panel */}
          <Route exact path='/AdminPanel' component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
