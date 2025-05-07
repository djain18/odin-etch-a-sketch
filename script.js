const divContainer = document.querySelector(".div-container");
const body = document.querySelector("body");

for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  div.className = "grid-item";
  let randomHoverColor = Math.ceil(Math.random() * 10);
  div.addEventListener("mouseover", function () {
    if (randomHoverColor > 5) {
      div.style.backgroundColor = "#3A0519";
      let opacity = 1;
      const fade = setInterval(() => {
        opacity -= 0.1;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fade);
        }
        div.style.opacity = opacity;
      }, 100);
    } else if (randomHoverColor < 5) {
      div.style.backgroundColor = "#A53860";
      let opacity = 1;
      const fade = setInterval(() => {
        opacity -= 0.1;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fade);
        }
        div.style.opacity = opacity;
      }, 100);
    } else if (randomHoverColor == 5) {
      div.style.backgroundColor = "#670D2F";
      let opacity = 1;
      const fade = setInterval(() => {
        opacity -= 0.1;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fade);
        }
        div.style.opacity = opacity;
      }, 100);
    }
  });
  divContainer.append(div);
}

const btn = document.createElement("button");
btn.textContent = "Enter size";
btn.style.position = "fixed";
btn.style.top = "10px";
btn.style.left = "700px";
btn.style.padding = "10px 20px";
body.append(btn);
btn.addEventListener("click", function () {
  let numberOfDivs = Number(prompt("Enter number of boxes less than 100"));
  if (numberOfDivs > 100 || numberOfDivs < 1) {
    alert("Enter a number between 1 to 100!");
  }
  divContainer.innerHTML = "";
  for (let i = 1; i <= numberOfDivs * numberOfDivs; i++) {
    const div1 = document.createElement("div");
    let randomHoverColor = Math.ceil(Math.random() * 10);
    div1.className = "grid-item";
    div1.addEventListener("mouseover", function () {
      if (randomHoverColor > 5) {
        div1.style.backgroundColor = "#3A0519";
        let opacity = 1;
        const fade = setInterval(() => {
          opacity -= 0.1;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fade);
          }
          div1.style.opacity = opacity;
        }, 100);
      } else if (randomHoverColor < 5) {
        div1.style.backgroundColor = "#A53860";
        let opacity = 1;
        const fade = setInterval(() => {
          opacity -= 0.1;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fade);
          }
          div1.style.opacity = opacity;
        }, 100);
      } else if (randomHoverColor == 5) {
        div1.style.backgroundColor = "#670D2F";
        let opacity = 1;
        const fade = setInterval(() => {
          opacity -= 0.1;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fade);
          }
          div1.style.opacity = opacity;
        }, 100);
      }
    });
    divContainer.append(div1);
  }
});
