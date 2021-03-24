// import React from "react"

const enableStickyHeader = headerElementId => {
  const header = document.getElementById(headerElementId)

  let last_scroll = 0

  const scrollChecker = el => {
    // console.log("inside enableStickyHeader")

    // if (window.scrollY > window.innerHeight * 0.8) {
    // el.classList.add("sticky")
    if (window.scrollY > 10) {
      if (window.scrollY < last_scroll) {
        el.classList.remove("slide-up")
        el.classList.add("slide-down")
        el.classList.add("has-slid")
      } else {
        if (el.classList.contains("has-slid")) {
          el.classList.add("slide-up")
          console.log("hey")
        }
        el.classList.remove("slide-down")
      }
    } else {
      // el.classList.remove("sticky")
      el.classList.remove("slide-up")
      el.classList.remove("slide-down")
      el.classList.remove("has-slid")
    }
    last_scroll = window.scrollY
  }

  window.addEventListener("scroll", () => scrollChecker(header))

  // React.useEffect(() => {
  //   const header = document.getElementById(headerElementId)

  //   window.addEventListener("scroll", () => scrollChecker(header))

  //   return () => {
  //     window.removeEventListener("scroll", () => scrollChecker(header))
  //   }
  // })

  // return
}

export default enableStickyHeader
