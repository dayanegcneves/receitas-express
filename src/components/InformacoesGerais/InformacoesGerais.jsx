import { CampoFormulario } from '../CampoFormulario/CampoFormulario'
import { CampoLista } from '../CampoLista/CampoLista'
import { Titulo } from '../Titulo/Titulo'
import './informacoes-gerais.estilos.css'

export function InformacoesGerais() {

    const niveisDificuldade = [
        {
            valor: 'Fácil',
            nome: 'Fácil'
        },
        {
            valor: 'Médio',
            nome: 'Médio'
        },
        {
            valor: 'Difícil',
            nome: 'Difícil'
        }
    ]

    const categorias = [
        {
            valor: 'Café da manhã',
            nome: 'Café da manhã'
        },
        {
            valor: 'Almoço',
            nome: 'Almoço'
        },
        {
            valor: 'Lanche',
            nome: 'Lanche'
        },
        {
            valor: 'Jantar',
            nome: 'Jantar'
        }
    ]

    return (
        <div>
            <Titulo>Informações Gerais</Titulo>
            <div className='card-informacoes-gerais'>
                <img src="/informacoes.png" alt="Imagem de ingredientes e receita" />
                <CampoFormulario nome='nome' label='Nome da receita' placeholder='Panqueca de banana'></CampoFormulario>
                <CampoFormulario nome='descricao' label='Descrição da receita' placeholder='Lanche simples e rápido'></CampoFormulario>
                <CampoFormulario nome='imagem' label='Imagem da receita' placeholder='https://...'></CampoFormulario>
                <CampoFormulario nome='tempoPreparo' label='Tempo de preparo' placeholder='10 minutos'></CampoFormulario>
                <CampoFormulario nome='rendimento' label='Rendimento' placeholder='2 porções'></CampoFormulario>
                <div className="selects">
                    <CampoLista label='Nível de dificuldade' nome='nivelDificuldade' placeholder='Informe o nível de dificuldade' lista={niveisDificuldade}></CampoLista>
                    <CampoLista label='Categoria' nome='categoria' placeholder='Informe a categoria' lista={categorias}></CampoLista>
                </div>
            </div>
        </div>
    )
}