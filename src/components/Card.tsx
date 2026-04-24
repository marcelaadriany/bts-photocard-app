import type { Card as CardType } from "../data/photocards";

type Props = {
  card: CardType | null;
};

export default function Card({ card }: Props) {
  if (!card) {
    return <p>Clique no botão para gerar um photocard</p>;
  }

  return (
    <div className="card">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
    </div>
  );
}
