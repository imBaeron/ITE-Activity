const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// no button
noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");
    noBtn.style.position = "absolute";
  
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;
  
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
  
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
   
// yes button
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ff9ecb, #ffc3da);
      color: white;
      font-family: 'Poppins', sans-serif;
    ">
      <h1 style="font-size: 3rem;">HORAYYYY 💖🥰</h1>
      <p style="font-size: 1.2rem;">See you on Valentine’s Day, baby! :) <3</p>
    </div>
  `;
});