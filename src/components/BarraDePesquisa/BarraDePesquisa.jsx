import { useState } from 'react'
import './barra-de-pesquisa.estilos.css'

export function BarraDePesquisa({onPesquisar}) {
    const [pesquisa, setPesquisa] = useState('')

    function handlePesquisar(e) {
        const valor = e.target.value
        setPesquisa(e.target.value)
        onPesquisar(e.target.value)
    }

    return (
        <div className='pesquisa'>
            <input
                className='barra-pesquisa'
                type="search"
                name="pesquisa"
                id="pesquisa"
                value={pesquisa}
                placeholder="Pesquisar receita"
                onChange={handlePesquisar}
            />
        </div>
    )
}