import './CardProduto.css'
function CardProduto(prop) {
    return (
        <div className='cont-card'>
        {console.log(prop.p.nome)}
            <h2>{prop.p.nome}</h2>
            <p>R${prop.p.preco.toFixed(2).replace('.',',')}</p>
            <p className= 'imagemProduto'>{prop.p.imagem}</p>

        </div>
    )
}

export default CardProduto
