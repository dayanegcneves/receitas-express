import { CardReceita } from '../../components/CardReceita/CardReceita'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import './receitas.estilos.css'

export function Receitas() {
    const [receitas, setReceitas] = useState([])

    useEffect(() => {
        async function fetchReceitas() {
            try {
                const dados = await api.buscarReceitas()
                setReceitas(dados)
            } catch (error) {
                console.error('Erro ao buscar receitas')
            }
        }

        fetchReceitas()
    }, [])

    return(
        <section className="receitas-page">
            <div className='receitas-page-cards'>
                {receitas.map((receita) => {
                    return(
                        <CardReceita key={receita.id} {...receita}></CardReceita>
                    )
                })}
            </div>
        </section>
    )
}