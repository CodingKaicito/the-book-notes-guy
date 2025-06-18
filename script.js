(function () {
    const nav = document.querySelector('nav');
    let isScrolling;

    window.addEventListener("scroll", function () {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            const scrollPosition = document.documentElement.scrollTop || window.pageYOffset;
            if (scrollPosition > 20) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }, 50); // Adjust the delay as needed
    });
})();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector(".menu-content").classList.toggle("show");
}