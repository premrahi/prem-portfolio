import { useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
useEffect(() => {
  const container = document.querySelector(".particles-bg") as HTMLElement;
  for (let i = 0; i < 80; i++) {
    const dot = document.createElement("div");
    dot.classList.add("particle");
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.animationDuration = Math.random() * 10 + 5 + "s";
    dot.style.animationDelay = Math.random() * 10 + "s";
    dot.style.width = Math.random() * 3 + 1 + "px";
    dot.style.animationDelay = `-${Math.random() * 10}s`;
    dot.style.height = dot.style.width;
    container.appendChild(dot);
  }
}, []);
useEffect(() => {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  const moveCursor = (e: MouseEvent) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  };

  const addBig = () => {
    cursor.classList.remove("custom-cursor");
    cursor.classList.add("custom-cursor-text");
  };

  const removeBig = () => {
    cursor.classList.remove("custom-cursor-text");
    cursor.classList.add("custom-cursor");
  };

  const textElements = document.querySelectorAll("p, h1, h2, h3, span, img");
  textElements.forEach((el) => {
    el.addEventListener("mouseenter", addBig);
    el.addEventListener("mouseleave", removeBig);
  });

  window.addEventListener("mousemove", moveCursor);
  return () => {
    window.removeEventListener("mousemove", moveCursor);
    textElements.forEach((el) => {
      el.removeEventListener("mouseenter", addBig);
      el.removeEventListener("mouseleave", removeBig);
    });
  };
}, []);

  return (
    <div className="particles-bg ">
      <Header />
      <Body />
    </div>
  );
}

export default App;
