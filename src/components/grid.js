import React, { useState, useEffect } from "react";
import Card from "./card";
import "../style/grid.css";
import data from "../data.json";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Grid() {
  const [cards, setCards] = useState(data);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/cards");
      const data = await response.json();
      setCards(data);
    };
    fetchData();
  }, []);

  const moveCard = (dragIndex, hoverIndex) => {
    debugger;

    const updatedCards = [...cards];
    const [draggedCard] = updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, draggedCard);
    setCards(updatedCards);
  };
  const handleCloseOverlay = () => setSelectedImage(null);

  // Close overlay on ESC keypress
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseOverlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid">
        {cards.map((item, index) => (
          <Card
            key={item.type}
            data={item}
            index={index}
            moveCard={moveCard}
            onClick={() => setSelectedImage(item.src)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Overlay" />
          </div>
        </div>
      )}
    </DndProvider>
  );
}

export default Grid;
