function showFeatures() {
    document.getElementById("features").classList.remove("hidden");
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function showDetail(text) {
    document.getElementById("detailText").innerText =
        text + " feature demonstrates modern UI interaction and cloud deployment.";
    document.getElementById("detailBox").classList.remove("hidden");
}

function closeDetail() {
    document.getElementById("detailBox").classList.add("hidden");
}
