
//Const cannot be reasigned --> man kan ikke endre innholdet
//Hvis mulig, bruk Const. Hvis det ikke er mulig, bruk Let.

let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

// Sjekker om leadsFromLocalStorage er sann, hvis sann - sett myLeads til den verdien og kall på funksjonen render()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


//Funksjon som skriver ut innholdet i listen
function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target='_blank' href=' " + leads[i] + "'>" + leads[i] + "</a></li>"

        //Alternativ måte å skrive på
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li>
        `

    }

    ulEl.innerHTML = listItems
}

// Når Delete blir dobbeltklikket, slett localStore, myLeads og DOM
deleteBtn.addEventListener("click", function () {
    console.log("double clikc")
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)

    //Tømmer input-feltet
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
    //Kaller på funksjonen som skriver ut innholdet i inputet, og legger verdiene i en liste 
    render(myLeads)
})





    //---->ALTERNATIV MÅTE til:     listItems += "<li>" + myLeads[i] + "</li>":<----
    //create element: const li = document.createElement("li")
    //Set text content: li.textContent = myLeads[i]
    //appen = sette noe på slutten : ulEl.append(li)



