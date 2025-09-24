import './input.estilos.css'

export function Input({nome, placeholder}) {
    return (
        <input type="text" name={nome} id={nome} placeholder={placeholder}/>
    )
}