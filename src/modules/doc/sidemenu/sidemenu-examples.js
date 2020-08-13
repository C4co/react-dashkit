export const import1 = `
import {
  SideMenu,
  SideMenuSection,
  SideMenuItem
} from "../components"
`

export const example1 = `
import {
  FaHome,
  FaFont,
  FaEdit,
  FaCheckSquare,
  FaRegDotCircle,
  FaSquare,
  FaChevronDown,
  FaThLarge,
  FaColumns
} from "react-icons/fa"

...

<SideMenu>
  ...
  <SideMenuSection title="Components">
    <SideMenuItem
      Icon={FaHome}
      actived={actived === "home" ? 1 : 0}
      to="/doc/home">
      Home
    </SideMenuItem>

    <SideMenuItem
      Icon={FaFont}
      actived={actived === "typography" ? 1 : 0}
      to="/doc/typography">
      Typography
    </SideMenuItem>

    <SideMenuItem
      Icon={FaEdit}
      actived={actived === "inputs" ? 1 : 0}
      to="/doc/inputs">
      Inputs
    </SideMenuItem>

    <SideMenuItem
      Icon={FaCheckSquare}
      actived={actived === "check" ? 1 : 0}
      to="/doc/checkbox">
      Checkbox
    </SideMenuItem>

    <SideMenuItem
      Icon={FaRegDotCircle}
      actived={actived === "radio" ? 1 : 0}
      to="/doc/radio">
      Radio
    </SideMenuItem>

    <SideMenuItem
      Icon={FaSquare}
      actived={actived === "buttons" ? 1 : 0}
      to="/doc/buttons">
      Buttons
    </SideMenuItem>

    <SideMenuItem
      Icon={FaChevronDown}
      actived={actived === "select" ? 1 : 0}
      to="/doc/select">
      Select
    </SideMenuItem>

    <SideMenuItem
      Icon={FaThLarge}
      actived={actived === "block" ? 1 : 0}
      to="/doc/block">
      Block
    </SideMenuItem>

    <SideMenuItem
      Icon={FaColumns}
      actived={actived === "sidemenu" ? 1 : 0}
      to="/doc/sidemenu">
      Sidemenu
    </SideMenuItem>
  </SideMenuSection>
</SideMenu>
`
