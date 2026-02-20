function CalNotas() {

function CalcularNotas() {
    let notas = Number(prompt("Digite a nota:"))

    if (notas >= 80){
        alert("Sua nota foi A!")
    }else if(notas >= 60){
        alert("Sua nota foi B!")
    }else if(notas >= 40){
        alert("Sua nota foi C!")
    }else if(notas >= 20){
        alert("Sua nota foi D!")
    }else if(notas >= 0){
        alert("Sua nota foi E!") 
    }
}
    return (
        <div>
          <h2>Classificação de Notas</h2>  
          <button onClick={CalcularNotas}>Classificar</button>
        </div>
    )
}

export default CalNotas
