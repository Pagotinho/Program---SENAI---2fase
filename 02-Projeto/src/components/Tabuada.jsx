function Tabuada() {
    function contas(){
        let nome = Number(prompt("Digite o numero:"))
        let calcular = 0
        for (let i = 0; i < 10; i++) {
            calcular = nome * i
            alert(calcular)
    }
}
        return (
        <div>
            <h1>Tabuada</h1>
            <button onClick={contas}>Tabuada</button>
        </div>
    )
}
export default Tabuada
