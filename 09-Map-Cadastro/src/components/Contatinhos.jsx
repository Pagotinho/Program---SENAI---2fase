function Contatinhos(props) {

    function Contatinhos({c}) {
        console.log(c);
        const {foto,nome, arroba,fone}= c
        
        
        return (
            <div>
            <h2>{nome}</h2>
            <p>{foto}</p>
            <img src={foto} alt={foto} style={{width: '200px'}}/>
            <p>{arroba}</p>
            <p>{fone}</p>
            <button onClick={() => excluir(id)}>Excluir</button>
        </div>
    )
}
}

export default Contatinhos
