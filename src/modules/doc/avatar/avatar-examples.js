export const import1 = `
  import { Avatar } from "../components"
`

export const example1 = `
const photo = "https://randomuser.me/api/portraits/women/47.jpg"
...
<Avatar size="50px" />
<Avatar size="50px" image={photo} />
`

export const example2 = `
const photo = "https://randomuser.me/api/portraits/women/47.jpg"
...
<Avatar size="50px" badge image={photo} />
<Avatar size="60px" badge badgeColor="#FFBB48" image={photo} />
<Avatar size="70px" badge badgeColor="#D0109D" image={photo} />
<Avatar size="80px" badge badgeColor="#10D026" image={photo} />
<Avatar size="90px" badge badgeColor="#000000" image={photo} />
`
