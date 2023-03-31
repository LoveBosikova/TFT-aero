@import "difference.css"

var rightpointer = document.querySelector("pointers__rightside");
var boeingItems = document.querySelector("difference__boeing-items");

rightpointer.addEventListener("click", function () {
    boeingItems.style.display = boeingItems.style.display == "block" ? "none" : "block";
});
