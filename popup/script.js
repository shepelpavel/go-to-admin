var table = document.getElementsByTagName('table')[0];
var tdInfo = table.getElementsByClassName('info')[0];

table.addEventListener('click', function(event) {

    if (event.target.nodeName == 'TD') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            var domain = url.substr(0, url.indexOf('/', 8));
            var newSrc = domain + event.target.getAttribute('data-src');

            chrome.tabs.create({
                index: tab.index + 1,
                url: newSrc
            });
        })
    }
});

table.addEventListener('mouseover', function(event) {
    var title = event.target.getAttribute('data-src') || '&mdash;';
    tdInfo.innerHTML = title;
});

table.addEventListener('mouseout', function(event) {
    tdInfo.innerHTML = '&mdash;';
});