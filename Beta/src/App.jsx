import { useState } from 'react'
import './App.css'
import pneu from './components/pneu';

function App() {
const[inputNome, setInputNome] = useState('')
function cadastrar(){
  console.log("Cadastrando: ",  inputNome);
}

  return (
    <>
    <h1>Inputs controlados</h1>
    Nome:<input type="text"
    value={inputNome}
    onChange={(e) => setInputNome(e.target.value) }
    />

    { <p>Nome digitado: {inputNome}</p> }

    <button onClick={cadastrar}>Cadastrar</button>

    </>
  )
}

export default pneu
