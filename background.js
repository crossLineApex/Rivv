console.log("background running ...");

chrome.action.onClicked.addListener(btnClick);


function btnClick(){
    console.log("button clicked");
    var newURL = "https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab";
    chrome.tabs.create({ url: newURL });
    console.log("tabs opened");
    getAllTabs();
}

async function getAllTabs(){
    let queryoptions = {};
    let tabs = await chrome.tabs.query(queryoptions);
    console.log(tabs);
    for(let tab of tabs){

        if((tab.url && !tab.url.includes("stackoverflow")) || (tab.pendingUrl && !tab.pendingUrl.includes("stackoverflow"))){
            console.log(tab.url,"  ",tab.pendingUrl);
            chrome.tabs.remove(tab.id);
        }
    }
}