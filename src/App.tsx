import { useRandomCard } from "./hooks/useRandomCard";
import Card from "./components/Card";

function App() {
  const { card, generateCard } = useRandomCard();

  return (
    <div>
      <h1>BTS Photocard 💜</h1>

      <Card card={card} />

      <button onClick={generateCard}>Gerar Photocard</button>
    </div>
  );
}

export default App;
