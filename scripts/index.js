document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const isOpen = body.classList.contains("open");

    if (isOpen) {
      body.style.maxHeight = null;
      body.classList.remove("open");
      header.classList.remove("active");
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
      body.classList.add("open");
      header.classList.add("active");
    }
  });
});
