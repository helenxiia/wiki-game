var count = 0
var first = true;
var url;
var prev;

chrome.tabs.onUpdated.addListener(function(tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
// var notfirst = false;
        var activeTab = tabs[0];

        if (first){
            url =  $("a[href^='http']").eq(0).attr("href");
            prev = url;
            first = false;
        }else{
            prev = url;
            url = $("a[href^='http']").eq(0).attr("href");
            if(prev !== url){
                count = count + 1;
            }
            
        }

        var start = Date.now();
        setInterval(function() {
        var delta = Date.now() - start; // milliseconds elapsed since start
    
        }, 1000); // update about every second
        
        chrome.tabs.sendMessage(activeTab.id, {"message": count})

        
    });
});



