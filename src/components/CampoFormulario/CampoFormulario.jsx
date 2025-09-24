import './campo-formulario.estilos.css'
import { Label } from '../Label/Label'
import { Input } from '../Input/Input'

export function CampoFormulario({nome, label, placeholder}) {
    return (
        <div>
            <Label nome={nome} label={label}></Label>
            <Input nome={nome} placeholder={placeholder}></Input>
        </div>
    )
}