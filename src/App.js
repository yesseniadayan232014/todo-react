import Todo from './components/Todo';
import { useState } from 'react';
import './App.css';


function App() {

  const defaultState = [
    { label: "Comprar mantequilla" },
    { label: "Comprar pan" },
    { label: "Pagar la luz" }
  ]

  const [items, setItems] = useState(defaultState)
  const [newItem, setNewItem] = useState('')

  const deleteFn = (label) => {
    setItems(items.filter(item => item.label !== label))
  }

  const deleteAll = () => (
     setItems([])
  )


  


  const list = items.map(item => {
    return (
      <Todo
        click={() => deleteFn(item.label)}
      >

        {item.label}
      </Todo >
    )
  })


  const onclickFn = () => {
    console.log(newItem)
    setItems([...items, { label: newItem }])
  }

  const onChangeFn = (event) => {
    setNewItem(event.target.value)
  }


  return (
    <div className="App">
      <h1>Mi lista de cosas por hacer</h1>
     <span> Cantidad de items :{items.length}</span>
      <input
        type='text'
        value={newItem}
        onChange={onChangeFn}
      />
      <button onClick={onclickFn}>Agregar</button>

      <button onClick = {deleteAll}>Borrar todo</button>

      {list}



    </div>
  );

}


export default App;
