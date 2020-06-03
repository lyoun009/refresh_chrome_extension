var contextMenus = {};

contextMenus.createRefresh =
    chrome.contextMenus.create(
        {"title": "Start Refreshing"},
            function(){
                if(chrome.runtime.lastError){
                    console.error(chrome.runtime.lastError.message);
                }
            }
        
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 // make a STOP REFRESHING ACTION

function contextMenuHandler(info, tab){

    if(info.menuItemId===contextMenus.createRefresh){
        //console.log("STARTED CREATE_REFRESH");

        //var i = 1;
        var stopRefreshing = false;
        while(stopRefreshing == false){ 
            //console.log("loop1 started");
            chrome.tabs.reload();
            
            wait(10000);
        }

        //out of loop now
        console.log("sucessfully broke out of loop");
        //console.log(1);
    }
}