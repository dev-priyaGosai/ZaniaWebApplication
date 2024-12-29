import React, { useState ,useRef} from "react";
import { useDrag, useDrop } from "react-dnd";
import "../style/card.css";

export default function Card({ key,data, index, moveCard,onClick }) {
  const [isLoading, setIsLoading] = useState(true);


  const ref = useRef(null);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // useDrag hook
  const [, drag] = useDrag({
    type: "CARD",
    item: { index }, 
  });
  console.log("Dragging item index:", index);

  // useDrop hook
  const [, drop] = useDrop({
    accept: "CARD",
    hover: (draggedItem) => {
      console.log("Dragged Item Index:", draggedItem.index, "Hover Index:", index);
      //if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index; 
      //}
    },
  });

  drag(drop(ref)); 
  

  return (
    <div
    ref={ref}
      className="card"
      style={{ width: "18rem", cursor: "grab", position: "relative" }}
    >
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      <img
        className="card-img-top"
        src={data.src}
        alt={data.title}
        onLoad={handleImageLoad}
        style={{
          display: isLoading ? "none" : "block",
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
        onClick={onClick}
      />
      <div className="card-body"  onClick={onClick}>
        <p className="card-text" >{data.title}</p>
      </div>
    </div>
  );
}
