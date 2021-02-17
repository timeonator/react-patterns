import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Prop from "./render-props/prop";


export default function BasicRoute() {
  return (

    <Router>
      <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React Patterns</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className = "d-flex justify-content-end" p2>
                <Nav.Link eventKey="home" href="/">Home</Nav.Link>
                <Nav.Link eventKey="Render Props" href="/renderprops">Props</Nav.Link>
                <Nav.Link eventKey="users" href="/Dashboard">Dashboard</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/renderprops">
            <Prop />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
