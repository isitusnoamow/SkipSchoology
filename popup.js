let checkbox = document.getElementById('check');
checked = true;
chrome.storage.sync.get(["checked"], function(result) {
    checkbox.checked = result.checked;
    checked = result.checked;
});
checkbox.checked = checked;

checkbox.addEventListener('click', function() {
    checked = !checked;
    chrome.storage.sync.set({ checked: checkbox.checked });
});