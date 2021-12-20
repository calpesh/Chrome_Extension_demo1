document.getElementById("myBtn").addEventListener("click", function() {
    let params = {
        active:true,
        currentWindow:true
    }
    chrome.tabs.query(params,function(tab){
        var CurrTab = tab[0];
        chrome.tabs.sendMessage(CurrTab.id,"run",(data)=>{
            document.getElementById("name").innerHTML = data.username
        })
    })
});
// console.log(setdata)