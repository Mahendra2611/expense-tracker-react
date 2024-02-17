
import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import Intro from './Components/Intro';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Intro/>
      <Header/>
      <div className='container'>
         <Container/>
         <IncomeExpenses/>
         <TransactionList/>
         <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
