import { SecaoLista } from '../SecaoLista/SecaoLista'
import './secao-lateral.estilos.css'

export function SecaoLateral({nome, descricao, ingredientes, modoPreparo}) {
    return(
        <div>
            <h1 className='secao-lateral-titulo'>{nome}</h1>
            <p className='secao-lateral-descricao'>{descricao}</p>
            <SecaoLista titulo='Ingredientes' lista={ingredientes}></SecaoLista>
            <SecaoLista titulo='Modo de preparo' lista={modoPreparo}></SecaoLista>
        </div>
    )
}