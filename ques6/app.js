// Q Write a script which fetches the data-color attribute of the card on double clicking on them and attaches the fetched class to that card. Also changes the data-color attribute to "used"

let cardsArr = document.querySelectorAll(".card");
for (let i = 0; i < cardsArr.length; i++) {
    cardsArr[i].addEventListener("dblclick", function (){
        let color = cardsArr[i].attributes[1].value;
        if (color != "used") {
            cardsArr[i].classList.add(color);
        }
        cardsArr[i].setAttribute("data-color", "used");
        console.log(cardsArr[i]);
    })
}