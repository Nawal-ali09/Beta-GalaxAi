import React from "react";

export const DisplayBox = ({ messages }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "80px",
        transform: "translateY(-50%)",
        height: "300px",
        width: "250px",
        maxHeight: "70%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "15px",
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "white",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif", // <-- Added font
        pointerEvents: "auto",
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            padding: "8px 12px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "10px",
          }}
        >
          {msg}
        </div>
      ))}
    </div>
  );
};
