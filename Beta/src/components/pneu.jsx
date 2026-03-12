import { useState } from 'react'
function App() {
const[inputNome, setInputNome] = useState('')
function cadastrar(){
  console.log("Cadastrando: ",inputNome);
}
  return (
    <>
    <h1>Atividade Inputs (PNEU)</h1>
    Calibragem:<input type="text"
    value={inputNome}
    onChange={(e) => setInputNome(e.target.value) }
    />
    <button onClick={cadastrar}>Cadastrar</button>
    </>
  )
}
export default App