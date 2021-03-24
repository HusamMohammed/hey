const sections = document.querySelectorAll("section[id]")
function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const offset = window.innerWidth > 1023 ? -100 : -87
    const sectionTop = current.offsetTop + offset
    const sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("#menu a[href*=" + sectionId + "]")
        .classList.add("active")

      document
        .querySelector("#mobileMenu a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      document
        .querySelector("#menu a[href*=" + sectionId + "]")
        .classList.remove("active")

      document
        .querySelector("#mobileMenu a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  })
}
window.addEventListener("scroll", scrollActive)
