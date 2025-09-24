import { Label } from '../Label/Label'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import './campo-lista.estilos.css'

export function CampoLista({ nome, lista, label, placeholder }) {
    return (
        <div className='campo-lista'>
            <Label label={label} nome={nome}></Label>
            <ListaSuspensa lista={lista} nome={nome} placeholder={placeholder}></ListaSuspensa>
        </div>
    )
}