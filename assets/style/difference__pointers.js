const rightPointer = document.querySelector(".pointers__rightside");
const leftPointer = document.querySelector(".pointers__leftside");
const boeingItems = document.querySelector(".difference__boeing-items");
const airbusItems = document.querySelector(".difference__airbus-items");

rightPointer.addEventListener("click", function () {
  boeingItems.style.display = "none";
  airbusItems.style.display = "block";
});

leftPointer.addEventListener("click", function () {
  boeingItems.style.display = "block";
  airbusItems.style.display = "none";
});
