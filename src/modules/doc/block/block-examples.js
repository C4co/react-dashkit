export const import1 = `
  import { Block, BlockField } from "../components"
`

export const example1 = `
<Block>
  <Text>
    ...
  </Text>
</Block>
`

export const example2 = `
<Block solid>
  <Text>
    ...
  </Text>
</Block>
`

export const example3 = `
<Block solid title="block title">
  <Text>
    ...
  </Text>
</Block>
`

export const example4 = `
<Block solid title="block title">
  <BlockField title="field1"> content1 </BlockField>
  <BlockField title="field2"> content2 </BlockField>
  <BlockField title="field3"> content3 </BlockField>
</Block>
`

export const example5 = `
<Block solid Icon={FaHeart} title="Block title">
  Block title with icon
</Block>
`

export const example6 = `
<Block
  title="Block title"
  solid
  footer={
    <Button> Footer button </Button>
  }>
  Content
</Block>
`

export const example7 = `
<Block title="Block title" solid col2>
  {/* === Column 1 === */}
  <div>
    <h1> Column 1 </h1><br/>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor necessitatibus eaque
      excepturi rerum neque repudiandae
      voluptatem cum vero.
    </p>
  </div>

  {/* === Column 2 === */}
  <div>
    <h1> Column 2 </h1><br/>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor necessitatibus eaque
      excepturi rerum neque repudiandae
      voluptatem cum vero.
    </p>
  </div>
</Block>
`
