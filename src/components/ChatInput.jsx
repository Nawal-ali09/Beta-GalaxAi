// import { useState } from "react";

// export const ChatInput = ({ onSend }) => {
//   const [text, setText] = useState("");

//   const handleSend = () => {
//   if (text.trim() !== "") {
//     const message = text.trim();
//     onSend(message);

//     // trigger welcome audio if user typed "hello" (case-insensitive)
//     if (message.toLowerCase() === "hello") {
//       onSend("TRIGGER_WELCOME"); // or call a separate function passed from parent
//     }

//     setText("");
//   }
// };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         bottom: 20,
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         pointerEvents: "auto",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           backdropFilter: "blur(10px)",
//           background: "rgba(255, 255, 255, 0)",
//           borderRadius: "15px",
//           padding: "10px 20px",
//           boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
//           border: "1px solid rgba(255, 255, 255, 0.2)",
//           width: "40%",
//         }}
//       >
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type a message..."
//           style={{
//             flex: 5,
//             background: "transparent",
//             border: "none",
//             outline: "none",
//             color: "white",
//             fontSize: "16px",
//             padding: "8px 10px",
//           }}
//         />
//         <button
//           onClick={handleSend}
//           style={{
//             marginLeft: "10px",
//             padding: "8px 16px",
//             background: "rgba(255, 255, 255, 0.06)",
//             border: "none",
//             borderRadius: "10px",
//             color: "white",
//             cursor: "pointer",
//             fontWeight: "bold",
//             transition: "0.2s",
//           }}
//           onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.4)")}
//           onMouseLeave={(e) => (e.target.style.background = "rgba(255,255,255,0.2)")}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };



import { useState } from "react";

export const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      onSend(text.trim());
      setText("");
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "15px",
          padding: "10px 20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          width: "40%",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 5,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: "16px",
            padding: "8px 10px",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            padding: "8px 16px",
            background: "rgba(255, 255, 255, 0.06)",
            border: "none",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.4)")}
          onMouseLeave={(e) => (e.target.style.background = "rgba(255,255,255,0.2)")}
        >
          Send
        </button>
      </div>
    </div>
  );
};
