import { useState } from 'react'
import './App.css'
import Contatinhos from './components/Contatinhos';

function App() {
 const[contatinhos,Setcontatinhos] = useState([])
 const[inputFoto, setInputFoto] = useState('')
 const[inputNome, setInputNome] = useState('')
 const[inputArroba, setInputArroba] = useState('')
 const[inputFone, setInputFone] = useState('')

function cadastrarContatinho(){
  const novoContatinho = {
    id: Date.now(),
    foto: inputFoto,
    nome: inputNome,
    arroba: inputArroba,
    fone: inputFone

  }
  Setcontatinhos([novoContatinho, ...contatinhos])
}




  return (
    <div className="cont-app">
    <div className="form-cadastro">

    <p>Cadastro de Usuarios</p>
    <div className="cont-input">
    <label>Foto:</label>
    <input type="text"
    value={inputFoto}
    onChange={(e) => setInputFoto(e.target.value)}
    />
    </div>
    <div className="cont-input">
    <label>Nome:</label>
    <input type="text"
    value={inputNome}
    onChange={(e) => setInputNome(e.target.value)}
    />
    </div>

    </div>
    <div className="cont-input">
    <label>Fone:</label>
    <input type="text"
    value={inputFone}
    onChange={(e) => setInputFone(e.target.value)}
    />
    </div>
    <div className="cont-input">
    <label>Arroba:</label>
    <input type="text"
    value={inputArroba}
    onChange={(e) => setInputArroba(e.target.value)}
    />
    </div>
   
      <div className="listaContatinhos">
      {contatinhos.map((Contatinhos))}
      
      </div>
   


    </div>
  )
}

export default App