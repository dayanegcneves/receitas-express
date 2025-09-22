import './secao-lista.estilos.css'
import { ItemListaNaoNumerada } from '../ItemListaNaoNumerada/ItemListaNaoNumerada'

export function SecaoLista({ titulo, lista }) {
    return (
        <div className='secao-lista'>
            <h3 className='titulo-secao'>{titulo}</h3>
            <ul>
                {lista.map((item, idx) => {
                    return (
                        <ItemListaNaoNumerada key={idx}>
                            {item}
                        </ItemListaNaoNumerada>
                    )
                })}
            </ul>
        </div>
    )
}