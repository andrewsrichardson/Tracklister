import ext from "./utils/ext";
import storage from "./utils/storage";

// Get the input field
var input = document.getElementById("search");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchBtn").click();
  }
});

var urls = ["one", "two", "three"];
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function getSearchResults() {
  fetch(
    "https://www.mixesdb.com/db/index.php?title=Special%3ASearch&profile=default&search=four+tet+bbc+radio+1+2019+12+13&fulltext=Search"
  )
    .then((response) => response.text())
    .then((text) => console.log(text));
  urls.forEach((url) => {
    var para = document.createElement("P"); // Create a <p> node
    var t = document.createTextNode(url); // Create a text node
    para.appendChild(t); // Append the text to <p>
    document.getElementById("track-content").appendChild(para);
  });
});

// var popup = document.getElementById("app");
// storage.get("color", function (resp) {
//   var color = resp.color;
//   if (color) {
//     popup.style.backgroundColor = color;
//   }
// });

// var template = (data) => {
//   var json = JSON.stringify(data);
//   return `
//   <div class="site-description">
//     <h3 class="title">${data.title}</h3>
//     <p class="description">${data.description}</p>
//     <a href="${data.url}" target="_blank" class="url">${data.url}</a>
//   </div>
//   <div class="action-container">
//     <button data-bookmark='${json}' id="save-btn" class="btn btn-primary">Save</button>
//   </div>
//   `;
// };
// var renderMessage = (message) => {
//   var displayContainer = document.getElementById("display-container");
//   displayContainer.innerHTML = `<p class='message'>${message}</p>`;
// };

// var renderBookmark = (data) => {
//   var displayContainer = document.getElementById("display-container");
//   if (data) {
//     var tmpl = template(data);
//     displayContainer.innerHTML = tmpl;
//   } else {
//     renderMessage("Sorry, could not extract this page's title and URL");
//   }
// };

// ext.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   var activeTab = tabs[0];
//   chrome.tabs.sendMessage(
//     activeTab.id,
//     { action: "process-page" },
//     renderBookmark
//   );
// });

// popup.addEventListener("click", function (e) {
//   if (e.target && e.target.matches("#save-btn")) {
//     e.preventDefault();
//     var data = e.target.getAttribute("data-bookmark");
//     ext.runtime.sendMessage({ action: "perform-save", data: data }, function (
//       response
//     ) {
//       if (response && response.action === "saved") {
//         renderMessage("Your bookmark was saved successfully!");
//       } else {
//         renderMessage("Sorry, there was an error while saving your bookmark.");
//       }
//     });
//   }
// });

var optionsLink = document.querySelector(".js-options");
optionsLink.addEventListener("click", function (e) {
  e.preventDefault();
  ext.tabs.create({ url: ext.extension.getURL("options.html") });
});
