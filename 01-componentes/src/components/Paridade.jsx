function Paridade() {

    // sq2 - 4

function calcularParidade(){
    let numero = Number(prompt("Digite o Numero:"))
if(numero % 2 == 0){
    alert("Esse numero é PAR!")
}else{
    alert("Esse numero é IMPAR") 

}

}



    return (
        <div>
            <h2>Par ou Impar?</h2>
            <button onClick={calcularParidade}>Paridade</button>
            
        </div>
    )
}

export default Paridade
