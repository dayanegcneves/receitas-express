import './input.estilos.css'

export function Input({nome, placeholder}) {
    return (
        <input className='input-campo' type="text" name={nome} id={nome} placeholder={placeholder}/>
    )
}