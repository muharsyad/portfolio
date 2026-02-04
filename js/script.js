function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("active");
}

function filterProjects(category) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    document.getElementById(`btn-${category}`).classList.add("active");

    const projects = document.querySelectorAll(".project-card");
    let hasVisible = false;

    projects.forEach((project) => {
        const projectCategory = project.getAttribute("data-category");
        if (category === "all" || projectCategory === category) {
            project.classList.remove("hidden");
            hasVisible = true;
        } else {
            project.classList.add("hidden");
        }
    });

    const noResults = document.getElementById("noResults");
    if (hasVisible) noResults.classList.add("hidden");
    else noResults.classList.remove("hidden");
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () =>
        document.getElementById("mobile-menu").classList.remove("active"),
    );
});
