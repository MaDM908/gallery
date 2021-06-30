import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Gallery from './components/Gallery/Gallery';
import Upload from './components/Upload/Upload';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Route exact path="/gallery" render = { () => <Gallery /> } />
        <Route exact path="/upload" render = { () => <Upload /> } />
        <Footer />
      </div>
    </Provider>
    </BrowserRouter>
  );
};

window.__store__ = store;

export default App;
