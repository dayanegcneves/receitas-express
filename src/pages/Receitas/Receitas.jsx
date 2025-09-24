import { CardReceita } from '../../components/CardReceita/CardReceita'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import './receitas.estilos.css'
import { BarraDePesquisa } from '../../components/BarraDePesquisa/BarraDePesquisa'

export function Receitas() {
    const [receitas, setReceitas] = useState([])
    const [filtro, setFiltro] = useState('')
    let dados = []

    async function fetchReceitas() {
        try {
            const dados = await api.buscarReceitas()
            setReceitas(dados)
        } catch (error) {
            console.error('Erro ao buscar receitas')
        }
    }

    async function buscarReceitas(termo) {
        if (!termo) {
            await fetchReceitas()
            return
        }

        try {
            const receitasFiltradas = await api.filtrarReceitas(termo)
            setReceitas(receitasFiltradas)

        } catch (error) {
            console.log('Erro ao buscar receitas');
        }
    }

    useEffect(() => {
        fetchReceitas()
    }, [])

    useEffect(() => {
        buscarReceitas(filtro)
    }, [filtro])

    return (
        <section className="receitas-page">
            <BarraDePesquisa onPesquisar={setFiltro}></BarraDePesquisa>
            <div className='receitas-page-cards'>
                {receitas.slice()
                    .reverse()
                    .map((receita) => {
                        return (
                            <CardReceita key={receita.id} {...receita}></CardReceita>
                        )
                    })}
            </div>
        </section>
    )
}