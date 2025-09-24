import { useState } from 'react'
import './input-dinamico.estilos.css'

export function InputDinamico({ label, onChange }) {
    const [valores, setValores] = useState([""]);

    const handleChange = (index, value) => {
        const novosValores = [...valores];
        novosValores[index] = value;
        setValores(novosValores);

        if (onChange) {
            onChange(novosValores); // informa ao pai
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
            <h3>{label}</h3>
            {valores.map((valor, index) => (
                <div key={index} style={{ marginBottom: "8px" }}>
                    <input
                        type="text"
                        value={valor}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder={`${label} ${index + 1}`}
                    />
                </div>
            ))}
            <button type="button" onClick={adicionarInput}>
                Adicionar {label.toLowerCase()}
            </button>
        </div>
    );
}