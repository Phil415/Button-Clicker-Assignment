function displayName(elementName) {
    console.log(elementName)
    elementName.innerText = "Logout";
}


var count = 1;
var countElement = document.querySelector("#count")
function add1() {
    count++;
    countElement.innerText = "the count is" + count;
    console.log(count);
}

