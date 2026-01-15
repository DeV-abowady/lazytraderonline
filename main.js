let more = document.getElementById("more");
let show_more = document.getElementById("show_more");


more.addEventListener("click", () => {
    show_more.classList.remove("remove");
    show_more.classList.add("active");
    more.classList.add("remove");
    
  });