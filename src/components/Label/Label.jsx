import './label.estilos.css'

export function Label({nome, label}) {
    return (
        <label htmlFor={nome}>
            {label}
        </label>
    )
}