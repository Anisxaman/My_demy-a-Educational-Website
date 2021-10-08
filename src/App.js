
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import StudentService from './Components/StudentService/StudentService';
import PageNotFound from './PageNotFound/PageNotFound';



function App() {
  
  return (
    <div className="">
      
          <BrowserRouter>
              <Header></Header>

          <Switch>
          <Route  exact path="/">
                    <Home></Home>

          </Route>
            <Route path="/home">
                  <Home></Home>
            </Route>
            <Route path="/services">
                    <Services></Services>
            </Route>
            <Route path="/about">
                    <About></About>
            </Route>
            <Route path="/student">
                    <StudentService></StudentService>
            </Route>
            <Route path="/student">
                    <StudentService></StudentService>
            </Route>
            <Route path="*">
                      <PageNotFound></PageNotFound>
            </Route>
          </Switch>

          
          <Footer></Footer>
          </BrowserRouter>


      
      







      
    </div>
  );
}

export default App;
