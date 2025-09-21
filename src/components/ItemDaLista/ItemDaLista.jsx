import './item-da-lista.estilos.css'
import { NavLink } from 'react-router-dom'

export function ItemDaLista({ label, pagina }) {
    return (
        <NavLink className={({ isActive }) =>
            isActive ? 'item item-ativo' : 'item'
        } to={pagina}>
            {label}
        </NavLink>
    )
}