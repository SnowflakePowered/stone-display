import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

const Link = (props) => {
  if (!props.extern) {
    return (
      <ReactRouterLink {...props}
        style={{
          textDecoration: 'none',
          backgroundColor: 'inherit',
          color: 'inherit'
        }} />
    )
  } else {
    return (<a href={props.to}
      style={{
        textDecoration: 'none',
        backgroundColor: 'inherit',
        color: 'inherit'
      }}>{props.children}</a>)
  }
}

export default Link
