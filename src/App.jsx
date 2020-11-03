import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { articles, sourceCategory } from "./json/newsapi.json";
import Home from "./components//home/Home";
import News from "./components/News";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route
            exact
            path="/news-details/:id"
            render={(props) => {
              let id = props.match.params.id;
              return (
                <ArticleDetails
                  article={articles[id - 1]}
                  categoryName={
                    sourceCategory[articles[id - 1].sourceID - 1].name
                  }
                />
              );
            }}
          ></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
