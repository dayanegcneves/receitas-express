import './detalhe-texto.estilos.css'

export function DetalheTexto({ titulo, detalhe }) {
    return (
        <p className='texto-titulo'>{titulo}: <span className='texto-detalhe'>{detalhe}</span></p>
    )
}