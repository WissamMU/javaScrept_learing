const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el");
let myLeads = []


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderNew(myLeads);
}
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = []
    renderNew(myLeads);
})


tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        myLeads.push(tabs[0].)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderNew(myLeads)
    })
});

    inputBtn.addEventListener("click", () => {
        if (inputEL.value.length == 0) {
            alert("Please select value");
        } else {
            myLeads.push(inputEL.value)
            inputEL.value = ""
            localStorage.setItem("myLeads", JSON.stringify(myLeads))

            renderNew(myLeads)
        }
    })

    function renderNew(Leads) {
        let items = "";
        for (let i = 0; i < Leads.length; i++) {
            items += `
        <li class="list-group-item">
            <a target='_blank' class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="${myLeads[i]}">
                ${Leads[i]}
            </a>
        </li>
    `
        }
        ulEl.innerHTML = items
    }


