import Header from './components/Header';
import OrderForm from './components/OrderForm';
import './App.css';
import OrderDetails from './components/OrderDetails';


function App() {
  return (
    <div>
      <Header/>
      <div className='flex'>
      <OrderForm/>
      <OrderDetails/>
     
      </div>
      <button className="mx-5 text-slate-50 px-9 py-3 bg-slate-700">Submit</button>
    </div>
  );
}

export default App;
