import { useState } from 'react'
import './input-dinamico.estilos.css'
import { Label } from '../Label/Label';

export function InputDinamico({ label, onChange }) {
    const [valores, setValores] = useState([""]);

    const handleChange = (index, value) => {
        const novosValores = [...valores];
        novosValores[index] = value;
        setValores(novosValores);

        if (onChange) {
            onChange(novosValores);
        }
    };

    const adicionarInput = () => {
        const novosValores = [...valores, ""];
        setValores(novosValores);
        if (onChange) {
            onChange(novosValores);
        }
    };

    return (
        <div>
            <Label nome={label} label={label}></Label>
            {valores.map((valor, index) => (
                <div key={index}>
                    <input
                        className='input-dinamico'
                        type="text"
                        value={valor}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder={`${label} ${index + 1}`}
                    />
                </div>
            ))}
            <button className='botao-adicionar' type="button" onClick={adicionarInput}>
                Adicionar {label.toLowerCase()}
            </button>
        </div>
    );
}