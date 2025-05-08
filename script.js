function changeText() {
    const text = document.getElementById("info-text");
    text.textContent = "The content has been updated via JavaScript!";
    text.classList.toggle("highlight"); // toggle red styling
  }
  
  // Add or remove an element
  function toggleElement() {
    const box = document.getElementById("box");
    if (box) {
      box.remove();
    } else {
      const newBox = document.createElement("div");
      newBox.id = "box";
      newBox.style.width = "100px";
      newBox.style.height = "100px";
      newBox.style.backgroundColor = "lightblue";
      newBox.style.marginTop = "20px";
      document.body.appendChild(newBox);
    }
  }
  