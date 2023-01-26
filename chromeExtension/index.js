
//Const cannot be reasigned --> man kan ikke endre innholdet
//Hvis mulig, bruk Const. Hvis det ikke er mulig, bruk Let.

let myLeads = []
const input = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    myLeads.push(input.value)

    //Kaller på funksjonen som skriver ut innholdet i inputet, og legger verdiene i en liste 
    renderLeads()

    //Tømmer input-feltet
    if (input.value != "") {
        input.value = ""
    }
})

//Funksjon som skriver ut innholdet i listen
function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItems
}




    //---->ALTERNATIV MÅTE til:     listItems += "<li>" + myLeads[i] + "</li>":<----
    //create element: const li = document.createElement("li")
    //Set text content: li.textContent = myLeads[i]
    //appen = sette noe på slutten : ulEl.append(li)