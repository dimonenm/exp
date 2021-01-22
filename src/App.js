import './App.css';
import Container from './containers/container/Container';
import Header from './containers/header/Header';
import Main from './containers/main/Main';


function App() {
  const db = {
    'year2021': [{
      'id': '1',//Номер экспертизы
      'date of incoming': '1611322829698',//Дата поступления
      'by materials': 'УД',//По материалам
      'numberOfTheMaterial': null,//Номер материала
      'difficulty of expertise': null,//Сложность экспертизы
      'article': null,//Статья
      'category of research': null,//Тип исследования
      'type of research': null,//Вид исследования
      'type of banknote': null,//Вид банкноты
      'surname of executor': null,//Фамилия исполнителя
      'agency of initiator': null,//Орган инициатора
      'unit of initiator': null,//Подразделение инициатора
      'post of initiator': null,//Должность инициатора
      'surname of initiator': null,//Фамилия инициатора
      'date of petition': '1611322829798',//Дата вынесения ходатайства
      'end date of petition': '1611322829898',//Конечная дата удовл-я ход-ва
      'date of approval of the petition': '1611322829998',//Дата удовл-ния ходатайства
      'date of prolongation': '1611322830198',//Дата удовл-ния ходатайства
      'end date of prolongation': '1611322830598',//Дата до которой продлена эксп-за
      'date of notification': '1611322830898',//Дата уведомления
      'result of expertise': null,//Результат
      'end date of expertise': '1611322830998',//Дата предпол-го окончания
      'date of execution': '1611322831998',//Дата выполнения экспертизы
      'date of outcome': '1611322832998',//Дата выдачи экспертизы
    }]
  }
  console.log(`${Date.now()}`);
  console.log(JSON.stringify(db));
  return (
    <Container>
      <Header />
      <Main />
    </Container>
    );
}

export default App;
