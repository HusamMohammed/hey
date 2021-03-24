import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AppContext from "../../Contexts/AppContext"

import {
  MobileMenuWrapper,
  MobileMenuList,
  MenuListItem,
  MenuLink,
} from "./styles"

import ToggleButton from "../shared/ToggleButton"

const HeaderMenuMobile = () => {
  // const counter = useRef(0)
  const { mobileMenu, toggleMobileMenu } = React.useContext(AppContext)

  // console.log(`Render No ${counter.current}`)
  // counter.current += 1

  const toggleHandler = e => {
    // if (e.target === e.currentTarget) {
    //   e.target.classList.toggle("active")
    // }
    // e.stopPropagation()
    //e.target.classList.toggle("active")
    // setIsopen(!isOpen)
    toggleMobileMenu(!mobileMenu)
  }
  const removeMenu = () => {
    toggleMobileMenu(false)
  }
  const handler = e => {
    if (e.target.nodeName === "A") {
      document
        .getElementById("mobileMenu")
        .querySelectorAll("a")
        .forEach(el => el.classList.remove("active"))
      e.target.classList.add("active")
    }
  }

  // console.log("hey header mobile")
  return (
    <MobileMenuWrapper>
      <ToggleButton
        // close={mobileMenu ? true : false}
        state={mobileMenu ? "close" : "default"}
        onClick={toggleHandler}
      />
      {/* <ToggleButton
        className={mobileMenu ? "active" : ""}
        onClick={toggleHandler}
      >
        <Bar />
        <Bar />
        <Bar />
      </ToggleButton> */}
      <MobileMenuList
        id="mobileMenu"
        className={`sidebar ${mobileMenu ? "active" : ""}`}
        onClick={handler}
      >
        <MenuListItem>
          <MenuLink to="#الرئيسية" className="active" onClick={removeMenu}>
            الرئيسية
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#عن_نقطة">
            عن نقطة
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#خدماتنا">
            خدماتنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#أعمالنا">
            أعمالنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#عملاؤنا">
            عملاؤنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={removeMenu} to="#اتصل_بنا">
            اتصل بنا
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink to="/">
            <StaticImage
              src="../../../content/assets/usa-flag.png"
              alt="flag"
              placeholder="blurred"
              layout="fixed"
              width={45}
            />
          </MenuLink>
        </MenuListItem>
      </MobileMenuList>
    </MobileMenuWrapper>
  )
}

export default HeaderMenuMobile
