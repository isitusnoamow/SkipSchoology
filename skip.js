let url = window.location.href;
let checked = null
let pattern = "path=";
chrome.storage.sync.get(["checked"], function(result) {
    checked = result.checked
    if(checked && url.includes(pattern)){
        let redir = url.substring(url.indexOf(pattern) + pattern.length);
        redir =  decodeURIComponent(redir.replace(/\+/g,  " "));
        window.location.href = redir;
    }
});

