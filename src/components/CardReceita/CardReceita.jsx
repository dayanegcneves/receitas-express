import './card-receita.estilos.css'
import { useNavigate } from 'react-router-dom'

export function CardReceita(props) {
    const navigate = useNavigate()

    function handleVerReceita() {
        navigate('/detalhar-receita', { state: { receita: props } })
    }

    return (
        <div className="card">
            <img src={props.imagem} alt={props.nome} className='card-img' />
            <div className="corpo">
                <div className="card-texto">
                    <h3 className="card-nome">{props.nome}</h3>
                    <p className="card-descricao">{props.descricao}</p>
                </div>
                <button className='card-botao' onClick={handleVerReceita}>Ver receita</button>
            </div>
        </div>
    )
}