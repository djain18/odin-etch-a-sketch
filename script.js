const divContainer = document.querySelector(".div-container");
const body = document.querySelector("body");
for(let i = 1; i <=256; i++){
    const div = document.createElement("div");
    div.className = "grid-item";
    div.addEventListener("mouseover", function(){
        div.style.backgroundColor = "blue";
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
btn.addEventListener("click", function(){
     let numberOfDivs = Number(prompt("Enter number of boxes less than 100"));
     if(numberOfDivs > 100 || numberOfDivs < 1){
        alert("Enter a number between 1 to 100!");
     }
     divContainer.innerHTML = "";
     for(let i = 1; i <= numberOfDivs * numberOfDivs; i++){
        const div1 = document.createElement("div");
        div1.className = "grid-item";
        div1.addEventListener("mouseover", function(){
            div1.style.backgroundColor = "blue";
        });
        divContainer.append(div1);
    }
})









