import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/login" component={Login}/>
          <h1>hello</h1>
          <Footer />
        {/* // <div className="App"> */}
        {/* </div> */}
      </main>
    </Router>
  );
}
export default App;
