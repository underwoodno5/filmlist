import React, { Component } from 'react';
import NavBar from './components/NavBar';
import FilmList from './components/FilmList';
import FilmModal from './components/FilmModal';
import FloatingActionButton from './components/FloatingActionButton';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <NavBar />
          <Container className='list-container'>
            <Container>
              <FilmList />
              <FilmModal />
              <FloatingActionButton />
            </Container>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
