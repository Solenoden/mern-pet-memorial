import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import axios from "axios";
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
import ArticleViewer from './components/ArticleViewer';

class App extends React.Component {
  state = {
    user: {
      userID: "5d95b2718b1fe61760006d34"
    },
    articles: [{}]
  }

  componentDidMount() {
    this.getUserArticles(this.state.user.userID);
  }

  getArticle(articleID) {
    return this.state.articles.find((article) => article._id === articleID);
  }

  getUserArticles = async (userID) => {
    const res = await axios.get("http://localhost:5000/articlePosts/byUser/" + userID);

    this.setState({
        articles: res.data
    });
  }

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
              <ArticleList user={this.state.user} articles={this.state.articles}/>
            </div>
            <Footer />
          </React.Fragment>
        )}/>

        <Route exact path="/article/new" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container">
              <ArticleFieldEditor editorMode="new" user={this.state.user} />
            </div>
            <Footer />
          </React.Fragment>
        )}/>

        <Route exact path="/article/edit/:id" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container">
              <ArticleFieldEditor editorMode="edit" user={this.state.user} article={this.getArticle(props.match.params.id)}/>
            </div>
            <Footer />
          </React.Fragment>
        )}/>

        <Route exact path="/article/view/:id" render={(props) => (
          <React.Fragment>
            <Header />
            <div className="container">
              <ArticleViewer article={this.getArticle(props.match.params.id)}/>
            </div>
            <Footer />
          </React.Fragment>
        )} />

        
        </Router>
      </div>
    );
  }
}

export default App;
