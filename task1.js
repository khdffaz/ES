function printForm(data){
    
    var keyBox = document.search.key;
    var val = keyBox.value;
    var printBlock = document.getElementById("printBlock"); // получаем элемент printBlock
    var pElement = document.createElement("p"); // создаем новый параграф
    pElement.textContent = val;    // устанавливаем у него текст
    printBlock.appendChild(pElement); // добавляем параграф в printBlock
}
 
var printButton = document.search.print;
printButton.addEventListener("click", printForm);

