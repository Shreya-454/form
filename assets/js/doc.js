let a = document.getElementById("eye");
function show() {
    if (a.value === '') {
        document.querySelector(".not-visible").style.display = "unset";
        document.querySelector(".show").style.display = "none";
    }
    else if (a.type === "password") {
        a.type = "text";
        document.querySelector(".not-visible").style.display = "none";
        document.querySelector(".show").style.display = "unset";
    } else {
        a.type = "password";
        document.querySelector(".not-visible").style.display = "unset";
        document.querySelector(".show").style.display = "none";
    }
}