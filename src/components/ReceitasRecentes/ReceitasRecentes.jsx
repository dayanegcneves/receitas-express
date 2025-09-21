import { CardReceita } from '../CardReceita/CardReceita'
import './receitas-recentes.estilos.css'
import api from '../../services/api'
import { useEffect, useState } from 'react'

export function ReceitasRecentes() {
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
        <section className="receitas-recentes">
            <h2 className='receitas-titulo'>Receitas recentes</h2>
            <div className='cards'>
                {receitas.map((receita) => {
                    return(
                        <CardReceita key={receita.id} {...receita}></CardReceita>
                    )
                })}
            </div>
        </section>
    )
}