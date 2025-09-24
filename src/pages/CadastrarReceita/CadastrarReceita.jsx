import { useState } from "react";
import { DetalhesDaReceita } from "../../components/DetalhesDaReceita/DetalhesDaReceita";
import { InformacoesGerais } from "../../components/InformacoesGerais/InformacoesGerais";
import api from "../../services/api";
import './cadastrar-receita.estilos.css'
import { useNavigate } from "react-router-dom";

export function CadastrarReceita() {
    const navigate = useNavigate()
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
            categoria: formData.get('categoria'),
            ingredientes: form.ingredientes,
            modoPreparo: form.modoPreparo
        }

        const resultado = await api.cadastrarReceita(dados)
        navigate('/receitas')
    };

    return (
        <form className="form-cadastro" action={handleSalvar}>
            <div className="secoes-cadastro">
                <InformacoesGerais onFormChange={(dados) => setForm({ ...form, ...dados })} />
                <DetalhesDaReceita onFormChange={(dados) => setForm({ ...form, ...dados })} />
            </div>
            <div className="rodape-botao">
                <button className="botao-salvar" type="submit">Salvar Receita</button>
            </div>
        </form>
    );
}

