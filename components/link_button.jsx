import React, { PropTypes, Component } from 'react'
import { Button } from 'semantic-ui-react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

export default class LinkButton extends Component {
  render () {
    const { to, children } = this.props
    const external = to.indexOf('http') === 0 || to.indexOf('mailto') === 0

    return (
      <Button
        as={Link}
        {...this.props}
        to={!external ? prefixLink(`/${to}/`) : undefined}
        href={external ? to : undefined}
        target={external ? '_blank' : undefined}
      >
        {children}
      </Button>
    )
  }
}

LinkButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}
