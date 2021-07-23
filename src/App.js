import './App.css';
import Container from '@material-ui/core/Container';
import Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Layout>
  );
}

export default App;
