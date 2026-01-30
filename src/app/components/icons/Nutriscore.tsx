import React from "react";

type NutriScoreProps = {
  score: 0 | 1 | 2 | 3 | 4 | 10
};

const NutriScore: React.FC<NutriScoreProps> = ({ score }) => {
  const letters: { letter: string; color: string }[] = [
    { letter: "A", color: "#4CAF50" },
    { letter: "B", color: "#8BC34A" },
    { letter: "C", color: "#FFEB3B" },
    { letter: "D", color: "#FF9800" },
    { letter: "E", color: "#F44336" },
  ];

  if (score === 10) return(
    <div className="not-nutriscore"></div>
  )

  return (
    <div className="nutriscore-box">
      {letters.map((l, i) => (
        <div>
          <p
            key={l.letter}
            className={`text ${i === score ? "active" : ""}`}
            style={{
              backgroundColor: l.color,
              color: "white",
              padding: "4px 0px",
              fontSize: i === score ? "1em" : "0.6em",
              textAlign: "center",
              minWidth: "24px",
              transition: "font-size 0.2s",
            }}
          >
            {l.letter}
          </p>
        </div>
      ))}
    </div>
  )
}

export default NutriScore;