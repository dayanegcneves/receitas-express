import './detalhes-da-receita.estilos.css'
import { InputDinamico } from '../InputDinamico/InputDinamico'
import { useState } from 'react';

export function DetalhesDaReceita({ onFormChange }) {
    const [ingredientes, setIngredientes] = useState([]);
    const [modoPreparo, setModoPreparo] = useState([]);

    const atualizarForm = (campo, valores) => {
        const novoEstado = {
            ingredientes: campo === "ingredientes" ? valores : ingredientes,
            modoPreparo: campo === "modoPreparo" ? valores : modoPreparo,
        };

        setIngredientes(novoEstado.ingredientes);
        setModoPreparo(novoEstado.modoPreparo);

        if (onFormChange) {
            onFormChange(novoEstado);
        }
    };

    return (
        <div>
            <InputDinamico
                label="Ingrediente"
                onChange={(valores) => atualizarForm("ingredientes", valores)}
            />

            <InputDinamico
                label="Modo de Preparo"
                onChange={(valores) => atualizarForm("modoPreparo", valores)}
            />
        </div>
    );
}