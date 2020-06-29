export const import1 = `
  import { Syntax } from "../components"
`

export const example1 = `
function add(x, y){
  return x + y
}

console.log(10, 20)
console.log(30, 40)
`

export const example2 = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta
    name="viewport"
    content="width=device-width,
    initial-scale=1.0"
  />
  <title>Document</title>
</head>
<body>
  <h1> Hello world! </h1>
</body>
</html>
`

export const example3 = `
*,
*:after,
*:before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img{
  visibility: visible;
  vertical-align: top;
}

html, body{
  font-family: "inter", arial, sans-serif;
  font-size: 1em;
  overflow-x: hidden;

  @media(max-width: 800px){
    font-size: 0.92em;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  box-shadow: 0 0 0 30px white inset !important;
}
`

export const exampleUsage = `
  <Syntax lang="jsx" code={code-example} arrow={false} />
`
