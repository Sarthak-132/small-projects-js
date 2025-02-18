let count = 0;
const valueCount = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    valueCount.textContent = count;
  });
});
