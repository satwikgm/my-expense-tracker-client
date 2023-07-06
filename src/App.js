import './App.css';
import Header from './components/Header/Header';
// import Balance from './components/Balance/Balance';
// import Transactions from './components/Transactions/Transactions';
import AddTransaction from './components/Transactions/AddTransaction.js';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Transactions /> */}
      <AddTransaction />
    </div>
  );
}

export default App;
