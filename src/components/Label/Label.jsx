import './label.estilos.css'

export function Label({nome, label}) {
    return (
        <label className='label-campo' htmlFor={nome}>
            {label}
        </label>
    )
}