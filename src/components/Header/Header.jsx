import { ItemDaLista } from '../ItemDaLista/ItemDaLista'
import './header.estilos.css'

export function Header() {
    return (
        <header className="cabecalho">
            <img src="/logo.svg" alt="Logomarca" className="logo" />
            <nav className="cabecalho-lista">
                <ItemDaLista className='item' label='Home' pagina='/'></ItemDaLista>
                <ItemDaLista className='item' label='Receitas' pagina='/receitas'></ItemDaLista>
                <ItemDaLista className='item' label='Cadastro' pagina='/cadastrar-receita'></ItemDaLista>
            </nav>
        </header>
    )
}