let url = window.location.href;
checked = true
chrome.storage.sync.get(["checked"], function(result) {
    checked = result.checked;
});
let pattern = "path=";
if(checked && url.includes(pattern)){
    let redir = url.substring(url.indexOf(pattern) + pattern.length);
    redir =  decodeURIComponent(redir.replace(/\+/g,  " "));
    window.location.href = redir;
}