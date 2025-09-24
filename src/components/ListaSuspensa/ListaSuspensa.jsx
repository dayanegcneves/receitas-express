import './lista-suspensa.estilos.css'

export function ListaSuspensa({ nome, lista, placeholder }) {
    return (
        <select name={nome} id={nome} placeholder={placeholder} >
            {lista.map((item) => {
                return (
                    <option key={item.valor} value={item.valor}>{item.nome}</option>
                )
            })}
        </select>
    )
}