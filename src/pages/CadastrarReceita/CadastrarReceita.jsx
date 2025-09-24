import { useState } from "react";
import { DetalhesDaReceita } from "../../components/DetalhesDaReceita/DetalhesDaReceita";
import { InformacoesGerais } from "../../components/InformacoesGerais/InformacoesGerais";
import api from "../../services/api";

export function CadastrarReceita() {
    const [form, setForm] = useState({
        nome: "",
        imagem: "",
        descricao: "",
        tempoPreparo: "",
        rendimento: "",
        nivelDificuldade: "",
        categoria: "",
        ingredientes: [],
        modoPreparo: []
    });

    const handleSalvar = async (formData) => {
        const dados = {
            nome: formData.get('nome'),
            imagem: formData.get('imagem'),
            descricao: formData.get('descricao'),
            tempoPreparo: formData.get('tempoPreparo'),
            rendimento: formData.get('rendimento'),
            nivelDificuldade: formData.get('nivelDificuldade'),
            categoria:formData.get('categoria'),
            ingredientes: form.ingredientes,
            modoPreparo: form.modoPreparo
        }

        await api.cadastrarReceita(dados)
        console.log("Form completo:", dados);
        // aqui chama sua API
    };

    return (
        <form action={handleSalvar}>
            <InformacoesGerais onFormChange={(dados) => setForm({ ...form, ...dados })} />
            <DetalhesDaReceita onFormChange={(dados) => setForm({ ...form, ...dados })} />
            <button type="submit">Salvar</button>
        </form>
    );
}

