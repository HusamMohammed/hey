import React from "react"

const useWindowSize = () => {
  //const isSSR = typeof window !== "undefined"

  const [isMobile, setIsMobile] = React.useState(false)

  const windowSizeChangeHandler = () => {
    console.log("cheking")
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  const windowSizeChangeHandler1 = () => {
    console.log("Last cheking")
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", windowSizeChangeHandler)

    return () => {
      window.removeEventListener("resize", windowSizeChangeHandler1)
    }
  })

  return isMobile
}

export default useWindowSize
