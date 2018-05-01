import React from 'react'

const DefaultLayout = (props) => (
  <html>
    <head>
      <title>React on server</title>
    </head>
    <body>
      { props.children }
    </body>
  </html>
)

export default DefaultLayout
