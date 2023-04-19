import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
