let checkbox = document.getElementById('check');
let checkered = null;
chrome.storage.sync.get(["checked"], function(result) {
    checkbox.checked = result.checked;
    checkered = result.checked;
});
checkbox.checked = checkered;
checkbox.addEventListener('click', function() {
    checkered = !checkered;
    checkbox.checked = checkered;
    chrome.storage.sync.set({ checked: checkbox.checked });
});