import { useLocation } from 'react-router-dom';
import { SecaoLateral } from '../../components/SecaoLateral/SecaoLateral';
import { CardDetalhesReceitas } from '../../components/CardDetalhesReceita/CardDetalhesReceita';
import './detalhar-receita.estilos.css'

export function DetalharReceita() {
  const location = useLocation();
  const { receita } = location.state || {};
  console.log('receita', receita);
  

  if (!receita) return <p>Receita não encontrada</p>;

  return (
    <div className='detalhes-receita'>
      <SecaoLateral nome={receita.nome} descricao={receita.descricao} ingredientes={receita.ingredientes} modoPreparo={receita.modoPreparo}></SecaoLateral>
      <CardDetalhesReceitas nome={receita.nome} imagem={receita.imagem} categoria={receita.categoria} tempoPreparo={receita.tempoPreparo} rendimento={receita.rendimento} nivelDificuldade={receita.nivelDificuldade} ></CardDetalhesReceitas>
    </div>
  );
}
