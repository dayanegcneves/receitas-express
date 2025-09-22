import './card-detalhes-receita.estilos.css'
import { DetalheTexto } from '../DetalheTexto/DetalheTexto'

export function CardDetalhesReceitas({...receita}) {   
    return(
        <div className='card-detalhes-receita'>
            <img className='card-detalhes-img' src={receita.imagem} alt={receita.nome} />
            <div className="card-corpo">
                <p className='categoria'>{receita.categoria}</p>
                <DetalheTexto titulo='Tempo de preparo' detalhe={receita.tempoPreparo}></DetalheTexto>
                <DetalheTexto titulo='Rendimento' detalhe={receita.rendimento}></DetalheTexto>
                <DetalheTexto titulo='Nível de dificuldade' detalhe={receita.nivelDificuldade}></DetalheTexto>
            </div>
        </div>
    )
}