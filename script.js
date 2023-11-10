//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function openpage(ab) {
    let localpage = document.querySelector('.main')
    console.log(localpage)
    let page = new XMLHttpRequest()
    console.log(page)

    page.onreadystatechange = () => {
        if (page.readyState == 4 && page.status == 200) {
            localpage.innerHTML = page.responseText
        }
    }
    page.open('GET', `./${ab}.html`)
    page.send()
}
