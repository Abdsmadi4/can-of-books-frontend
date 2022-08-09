import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BestBooks from './Components/BestBooks';
import Welcome from './Components/Welcome';
import About from './About';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const {
    isAuthenticated,
  } = useAuth0();


  return (
    <>
      <Router>
        <Header />

        {!isAuthenticated &&
          <Welcome />
        }

        {isAuthenticated &&
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
          </Routes>
        }
        <Routes>
          <Route
            exact path="/about"
            element={<About />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}


export default App;
