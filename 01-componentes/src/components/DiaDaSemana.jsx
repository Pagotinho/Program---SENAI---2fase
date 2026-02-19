function DiaDaSemana() {
    function verificarDia(){
        let dia = prompt("Digite o dia da semana: (1 a 7)")
        // let dia = Number(prompt("Digite o dia da semana: (1 a 7)"))
        dia = Number(dia)

        // if(dia == 1){
        //     alert("Domingo")
        // }else if(dia == 2){
        //     alert("Segunda Feira")
        // }else if(dia == 3){
        //     alert("Terça Feira")
        // }else if(dia == 4){
        //     alert("Quarta Feira")
        // }else if(dia == 5){
        //     alert("Quinta Feira")
        // }else if(dia == 6){
        //     alert("Sexta Feira")
        // }else if(dia == 7){
        //     alert("Sabado")
        // }else{
        //     alert("Esse dia não existe")
        // }

        switch(dia){

            
            case 1 : alert("Domingo")
            break
            case 2 : alert("Segunda-Feira")
            break
            case 3: alert("Terça Feira")
            break
            case 4: alert("Quarta Feira")
            break
            case 5: alert("Quinta Feira")
            break
            case 6: alert("Sexta Feira")
            break
            case 7: alert("Sabado")
            break
            
        }


        console.log(dia);

        switch(dia){
            case 1: alert("Domingo")

        }
    }
    return (
        <div>
            <h2>Dia da Semana</h2>
            <button onClick={verificarDia}>Verificar Dia</button>
        </div>
    )
}

export default DiaDaSemana