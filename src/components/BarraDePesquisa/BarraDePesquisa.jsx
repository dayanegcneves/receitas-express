import './barra-de-pesquisa.estilos.css'

export function BarraDePesquisa() {
    return (
        <div className="barra-pesquisa">
            <img src="/search.svg" alt="lupa" className="icone-lupa" />
            <input
                type="search"
                name="pesquisa"
                id="pesquisa"
                placeholder="Pesquisar receita"
            />
        </div>
    )
}