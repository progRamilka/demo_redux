//import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector (state => state.cash.cash)
  const customers = useSelector (state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload : cash })
  }
  
  const getCash = (cash) => {

    dispatch({ type: "GET_CASH", payload : cash })

  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }

  const removeCustomersAll = () => {
    dispatch({ type: "REMOVE_CUSTOMERS_ALL", payload: customers })
  }

  const removeCustomer = (customer) => {
    console.log(customer);
    dispatch({ type: "REMOVE_CUSTOMER", payload: customers.id })
  }

  return (
    <div className={"app"}>
      <div style={{display: "block"}}>
        <div style={{fontSize: "3em"}}>Баланс: {cash}</div>
        <button onClick={() => addCash(Number(prompt())) }>Пололнить счет</button>
        <button onClick={() => getCash(Number(prompt())) }>Снять со счета</button>
        <button onClick={() => addCustomer(prompt()) }>Добавить клиента</button>
        <button onClick={() => removeCustomersAll() }>Удалить клиентов</button>
      </div>
      {customers.length > 0 ? 
        <div>
          {customers.map(customer =>
            <div onClick={()=> removeCustomer(customer) }  
              style={{fontSize:"2em", border: "solid 1px grey", padding: "10px", marginTop: "5px"  }}
              >{(customer.name)}</div>
          )}
        </div>
        :
        <div>
          Клиентов нет!
        </div>
      }
      
    </div>
  )
}

export default App;
