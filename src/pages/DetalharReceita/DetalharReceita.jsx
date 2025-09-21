import { useLocation } from 'react-router-dom';

export function DetalharReceita() {
  const location = useLocation();
  const { receita } = location.state || {};

  if (!receita) return <p>Receita não encontrada</p>;

  return (
    <div>
      <h1>{receita.nome}</h1>
      <img src={receita.imagem} alt={receita.nome} />
      <p>{receita.descricao}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {receita.ingredientes.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3>Modo de preparo:</h3>
      <ol>
        {receita.modoPreparo.map((passo, idx) => (
          <li key={idx}>{passo}</li>
        ))}
      </ol>
    </div>
  );
}
