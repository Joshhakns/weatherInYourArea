const apiKey = "fc09ab90ad8489eed1a973ab3535c9bd";

const form = document.querySelector("form");
const cityInput = document.querySelector("#city");
const resultsDiv = document.querySelector('#results');
const searchHistoryKey = "searchHistory";

function init() {
    renderSearchHistory();
    form.addEventListener("submit", event => {
        event.preventDefault();
        const city = cityInput.value;
        console.log(city);
        storeCityHistory(city);
        renderSearchHistory();
    })
    
}



function saveCityHistory() {
    // Get the input field element
    let inputField = document.getElementById("cityInputField");

    // Get the value of the input field
    let userInput = inputField.value;

    // Store the value in local storage
    localStorage.setItem("userInput", userInput);
  }

  function storeCityHistory(city) {
   
    let history = JSON.parse(localStorage.getItem(searchHistoryKey)) || [];
    history.unshift(city);
    if (history.length > 5) {
        history.pop();
    }
    localStorage.setItem(searchHistoryKey, JSON.stringify(history));
  }

  function renderSearchHistory() {
    let history = JSON.parse(localStorage.getItem(searchHistoryKey)) || [];
    let historyContainer = document.querySelector("#pastCities")
    // historyContainer.innerHTML = ""
  }



  init();