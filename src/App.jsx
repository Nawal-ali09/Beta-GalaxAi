// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { ChatInput } from "./components/ChatInput";
// import { useState } from "react";

// function App() {
//   const [scriptCommand, setScriptCommand] = useState("");

//   return (
//     <>
//       <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
//         <color attach="background" args={["#000000"]} />
//         <Experience scriptCommand={scriptCommand} />
//       </Canvas>
//       <ChatInput onSend={(text) => setScriptCommand(text.toLowerCase())} />
//     </>
//   );
// }

// export default App;



// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { ChatInput } from "./components/ChatInput";
// import { DisplayBox } from "./components/DisplayBox";
// import { useState } from "react";

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [scriptCommand, setScriptCommand] = useState("");

//   const handleSend = (text) => {
//     const lowerText = text.toLowerCase();
//     setScriptCommand(lowerText); // send command to avatar
//     setMessages((prev) => [...prev, text]); // add message to display box
//   };

//   return (
//     <>
//       <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
//         <color attach="background" args={["#000000"]} />
//         <Experience scriptCommand={scriptCommand} />
//       </Canvas>

//       {/* Glassy Display Box */}
//       <DisplayBox messages={messages} />

//       {/* Chat Input */}
//       <ChatInput onSend={handleSend} />
//     </>
//   );
// }

// export default App;




// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { ChatInput } from "./components/ChatInput";
// import { DisplayBox } from "./components/DisplayBox";
// import { useState } from "react";

// function App() {
//   const [scriptCommand, setScriptCommand] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleSend = (text) => {
//     const msg = text.toLowerCase();
//     setScriptCommand(msg);

//     // Add spoken text to the display box
//     setMessages((prev) => [...prev, msg]);
//   };

//   return (
//     <>
//       <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
//         <color attach="background" args={["#000"]} />
//         <Experience scriptCommand={scriptCommand} />
//       </Canvas>

//       {/* Display the messages */}
//       <DisplayBox messages={messages} />

//       <ChatInput onSend={handleSend} />
//     </>
//   );
// }

// export default App;



// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { ChatInput } from "./components/ChatInput";
// import { DisplayBox } from "./components/DisplayBox";
// import { useState, useEffect } from "react";

// function App() {
//   const [scriptCommand, setScriptCommand] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleSend = (text) => {
//     const msg = text.toLowerCase();
//     setScriptCommand(msg);

//     if (msg === "hello") {
//       typeMessage(" Hello! User, Welcome to Galax AI. Let me explain to you about our services.");
//     } else {
//       // For other messages, just add normally
//       setMessages((prev) => [...prev, msg]);
//     }
//   };

//   // Typewriter effect
//   const typeMessage = (fullText) => {
//     let index = 0;
//     setMessages([]); // clear current display

//     const interval = setInterval(() => {
//       setMessages((prev) => {
//         const last = prev[prev.length - 1] || "";
//         if (index === 0) return [fullText.charAt(index)];
//         return [...prev.slice(0, -1), last + fullText.charAt(index)];
//       });

//       index++;
//       if (index >= fullText.length) clearInterval(interval);
//     }, 100); // typing speed in ms
//   };

//   return (
//     <>
//       <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
//         <color attach="background" args={["#000"]} />
//         <Experience scriptCommand={scriptCommand} />
//       </Canvas>

//       {/* Display the messages */}
//       <DisplayBox messages={messages} />

//       <ChatInput onSend={handleSend} />
//     </>
//   );
// }

// export default App;





import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ChatInput } from "./components/ChatInput";
import { DisplayBox } from "./components/DisplayBox";
import { useState, useRef } from "react";

function App() {
  const [scriptCommand, setScriptCommand] = useState("");
  const [messages, setMessages] = useState([]);
  const typingInterval = useRef(null);

  const handleSend = (text) => {
    const msg = text.toLowerCase();

    // Clear previous interval to avoid overlap
    if (typingInterval.current) clearInterval(typingInterval.current);

    if (msg === "hello") {
      typeMessage(
        " Hello! User, Welcome to Galax AI. Let me explain to you about our services."
      );

      // Reset scriptCommand briefly to allow retriggering
      setScriptCommand(""); 
      setTimeout(() => setScriptCommand(msg), 50); 
    } else {
      setMessages((prev) => [...prev, msg]);
      setScriptCommand(msg);
    }
  };

  const typeMessage = (fullText) => {
    let index = 0;
    setMessages([]); // clear current display

    typingInterval.current = setInterval(() => {
      setMessages((prev) => {
        const last = prev[prev.length - 1] || "";
        if (index === 0) return [fullText.charAt(index)];
        return [...prev.slice(0, -1), last + fullText.charAt(index)];
      });

      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval.current);
        typingInterval.current = null;
      }
    }, 100); // typing speed
  };

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={["#000"]} />
        <Experience scriptCommand={scriptCommand} />
      </Canvas>

      <DisplayBox messages={messages} />
      <ChatInput onSend={handleSend} />
    </>
  );
}

export default App;
