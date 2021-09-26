
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
const iTag = document.getElementsByTagName("i");
const li = document.getElementsByTagName("li")


// adding into todo list
btn.addEventListener("click",() => {
    var text = "";
    text = prompt("enter your task");
    if (text !== "") {
        let liEle = document.createElement("li");
        liEle.innerHTML = text;
        let dustBin = document.createElement("i");
        dustBin.className = "far fa-trash-alt";
        liEle.appendChild(dustBin);
        ul.appendChild(liEle);
    } else {
        alert("enter something");
    }
})


// removing from to do list

for (let i = 0; i < iTag.length; i++) {
  
    ul.onclick = e => {

// removing element  from to do list

        if (e.target.tagName === "I"){
        let x = e.target.parentNode;
        x.remove();

        
    }

// task done

        if (e.target.tagName === "LI") {
            if (e.target.style.textDecoration === "line-through") {
                e.target.style.textDecoration = "none";
                e.target.style.backgroundColor = "#ADD2C2"
            } else {
                e.target.style.textDecoration = "line-through";
                e.target.style.backgroundColor = "grey"
            }
        }
    }
};

