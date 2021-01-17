document.getElementById("myButton").addEventListener("click", displayArticles);

function displayArticles() {
  chrome.tabs.getSelected(null, function(tab) { //<-- "tab" has all the information
  console.log(tab.url);       //returns the url
  console.log(tab.title);     //returns the title
});
      }

