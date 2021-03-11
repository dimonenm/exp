import './App.css';
import Container from './containers/container/Container';
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import DB from './db/dbExps45';


function App() {

  const db = DB();
  
  return (
    <Container>
      <Header />
      <Main db={db}/>
    </Container>
    );
}

export default App;
