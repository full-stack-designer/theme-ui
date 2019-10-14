import React from 'react'
import Box from './box'

export const Image = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="img"
    {...props}
    __themeKey="images"
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
))
