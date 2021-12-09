import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncaction/customers';
import { addAsyncCashAction, getAsyncCashAction } from './store/cashReducer';
import { fetchUsers } from './store/userReducer';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  console.log(cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(customers)
  
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{fontSize: '3rem'}} >{cash}</div>
      <div className='addGetButtons'>
        <button onClick={() => addCash(1)} className='bbbutton' >Инкремент</button>
        <button onClick={() => getCash(1)} className='bbbutton'>Декремент</button>
        <button onClick={() => dispatch(addAsyncCashAction())} className='bbbutton' >Пополнить с задержкой</button> 
        <button onClick={() => dispatch(getAsyncCashAction())} className='bbbutton'>Снять с задержкой</button>
        <button onClick={() => addCustomer(prompt())} className='bbbutton'>Добавить клиента</button> 
        {/* <button onClick={() => dispatch(fetchCustomers())} className='bbbutton'>Получить список клиентов</button> // асинхронная*/} 
        {/* <button onClick={() => dispatch(fetchUsers())} className='bbbutton'>Получить список клиентов</button> // через сагу, не работает */} 
        <button onClick={() => dispatch(fetchUsers())} className='bbbutton'>Получить список клиентов</button>
      </div>
      {customers.length > 0
        ?
        <div style={{marginTop: 30, fontSize: '1.5rem'}}>
          {customers.map( customer => {
            return <div onClick={() => removeCustomer(customer)} style={{border: '1px solid teal', borderRadius: 5, padding: 5, marginTop: 5}} key={customer.id}>{customer.name}</div>
          } )}
        </div>
        :
        <div style={{marginTop: 30, fontSize: '1.5rem'}}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
