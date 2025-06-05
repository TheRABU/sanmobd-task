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

document.getElementById("waitlist-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("footer-input").value;
  console.log(inputValue);
  setTimeout(() => {
    alert("Found your Email. We will notify you soon: " + inputValue);
  }, 2000);
});
