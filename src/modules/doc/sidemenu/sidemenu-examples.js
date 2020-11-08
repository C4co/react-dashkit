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
      actived={actived === "home"}
      to="/doc/home">
      Home
    </SideMenuItem>

    <SideMenuItem
      Icon={FaFont}
      actived={actived === "typography"}
      to="/doc/typography">
      Typography
    </SideMenuItem>

    <SideMenuItem
      Icon={FaEdit}
      actived={actived === "inputs"}
      to="/doc/inputs">
      Inputs
    </SideMenuItem>

    <SideMenuItem
      Icon={FaCheckSquare}
      actived={actived === "check"}
      to="/doc/checkbox">
      Checkbox
    </SideMenuItem>

    <SideMenuItem
      Icon={FaRegDotCircle}
      actived={actived === "radio"}
      to="/doc/radio">
      Radio
    </SideMenuItem>

    <SideMenuItem
      Icon={FaSquare}
      actived={actived === "buttons"}
      to="/doc/buttons">
      Buttons
    </SideMenuItem>

    <SideMenuItem
      Icon={FaChevronDown}
      actived={actived === "select"}
      to="/doc/select">
      Select
    </SideMenuItem>

    <SideMenuItem
      Icon={FaThLarge}
      actived={actived === "block"}
      to="/doc/block">
      Block
    </SideMenuItem>

    <SideMenuItem
      Icon={FaColumns}
      actived={actived === "sidemenu"}
      to="/doc/sidemenu">
      Sidemenu
    </SideMenuItem>
  </SideMenuSection>
</SideMenu>
`
