const inputText = document.getElementById("myInput");
const btn = document.getElementById("addBtn")
const listStuff = document.getElementById("myUL");

btn.addEventListener("click",newElement);
function newElement() {
      let item = inputText.value;
      const newItem = document.createElement("li");
      let text = document.createTextNode(item);
      newItem.append(text);
      listStuff.appendChild(newItem);
      const removeButton = document.createElement("button");
      removeButton.style.color = 'black';
      removeButton.style.fontSize = "1em";
      removeButton.style.fontFamily = "Space Grotesk", "sans-serif";
      removeButton.style.backgroundColor = 'magenta';
      removeButton.textContent = 'KILLED IT';
      
      newItem.append(removeButton);

      removeButton.addEventListener('click', ()=>{

        newItem.remove();

      });

     }


  let inputRectangle = document.getElementById ("myDIV"); 
   inputRectangle.addEventListener("mouseover", () => {
    document.getElementById("funtext").innerHTML += "*internal screaming* <br>";
  })









  



