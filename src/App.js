import './App.css';
import Container from './containers/container/Container';
import Header from './containers/header/Header';
import Main from './containers/main/Main';


function App() {
  const db = {
    'year2021': [{
      'id': '1',
      
    }]
  }
  console.log(JSON.stringify(db));
  return (
    <Container>
      <Header />
      <Main />
    </Container>
    );
}

export default App;
