import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ArticleList from './components/ArticleList';
import ArticleFieldEditor from "./components/ArticleFieldEditor";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>

          <Route exact path="/" render={(props) => (
            <React.Fragment>
              <Header />
              <LandingPage />
              <Footer />
            </React.Fragment>
          )}/>

        <Route exact path="/about" render={(props) => (
          <React.Fragment>
            <Header />
            <AboutPage />
            <Footer />
          </React.Fragment>
        )}/>  

        <Route exact path="/login" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container content">
              <LoginForm />
            </div>
            <Footer />
          </React.Fragment>
        )}/>  

        <Route exact path="/signup" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container content">
              <SignUpForm />
            </div>
            <Footer />
          </React.Fragment>
        )}/>  

        <Route exact path="/yourarticles" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container content">
              <ArticleList />
            </div>
            <Footer />
          </React.Fragment>
        )}/>

        <Route exact path="/article/new" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container content">
              <ArticleFieldEditor editorMode="new" />
            </div>
            <Footer />
          </React.Fragment>
        )}/>

        </Router>
      </div>
    );
  }
}

export default App;
