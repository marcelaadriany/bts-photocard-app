import { useState } from "react";
import { photocards } from "../data/photocards";
import type { Card } from "../data/photocards";

export function useRandomCard() {
  const [card, setCard] = useState<Card | null>(null);

  function generateCard() {
    const randomIndex = Math.floor(Math.random() * photocards.length);
    const selectedCard = photocards[randomIndex];

    setCard(selectedCard);
  }

  return { card, generateCard };
}
