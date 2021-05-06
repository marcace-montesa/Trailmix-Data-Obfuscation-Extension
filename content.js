//content script
var getdata;
chrome.storage.local.get("username", function (data) {
    getdata = data.username
    // use getdata in your content script
chrome.storage.local.remove("username");// this is optional
});

var pass;
chrome.runtime.sendMessage({content: 'username: ' + username + " password: " + password, type: "credentials"}, function(response) {
pass = response.response;
console.log('resposne: ' + response.response);
});
console.log(pass) 
console.log(getdata)