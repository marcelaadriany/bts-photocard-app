import { useRandomCard } from "./hooks/useRandomCard";

function App() {
  const { card, generateCard } = useRandomCard();

  return (
    <div>
      <h1>BTS Photocard 💜</h1>

      <button onClick={generateCard}>Gerar Photocard</button>

      {card && (
        <div>
          <img src={card.image} alt={card.name} width="200" />
          <p>{card.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
