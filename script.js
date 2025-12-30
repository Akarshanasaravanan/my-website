function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function showDetail(text){
    document.getElementById("detailText").innerText = text + " feature demonstrates modern UI interaction and cloud deployment.";
    document.getElementById("detailBox").classList.remove("hidden");
}

function closeDetail(){
    document.getElementById("detailBox").classList.add("hidden");
}

// Optional: Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
});
