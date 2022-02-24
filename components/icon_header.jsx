import React, { PropTypes, Component } from 'react'
import { Icon, Header } from 'semantic-ui-react'

export default class IconHeader extends Component {
  render () {
    const { header, icon, subHeader, as, inverted, circular, textAlign } = this.props
    return (
      <Header as={as || 'h3'} icon inverted={inverted} textAlign={textAlign || undefined}>
        <Icon name={icon} circular={circular} />
        <Header.Content>
          {header}
          {subHeader && <Header.Subheader content={subHeader} />}
        </Header.Content>
      </Header>
    )
  }
}

IconHeader.propTypes = {
  header: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  subHeader: PropTypes.string,
  as: PropTypes.string,
  circular: PropTypes.bool,
  textAlign: PropTypes.string
}
