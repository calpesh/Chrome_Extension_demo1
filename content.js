function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
chrome.runtime.onMessage.addListener((res,req,msg)=>{
    if(res == "run"){
        let username = getElementByXpath("//html/body/div[6]/div[3]/div/div/div/div/div[3]/div/div/main/div/section/div[2]/div[2]/div[1]/div[1]/h1").textContent;
        let work = getElementByXpath("//html/body/div[6]/div[3]/div/div/div/div/div[3]/div/div/main/div/section/div[2]/div[2]/div[1]/div[2]").textContent;
        let location = getElementByXpath("//html/body/div[6]/div[3]/div/div/div/div/div[3]/div/div/main/div/section/div[2]/div[2]/div[2]/span[1]").textContent;
        msg({
            username : username,
            work : work,
            location : location});
    }
});
