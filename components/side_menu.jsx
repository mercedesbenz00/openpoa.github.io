import React, { PropTypes, Component } from 'react'
import { Dimmer, Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

const minItems = 3
const w = typeof window === 'undefined' ? undefined : window

export default class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.state = { showSidebar: false, wide: this.isWide() }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.handleCloseIfOpen = this.handleCloseIfOpen.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  handleToggleVisibility (show) {
    const showSidebar = show !== undefined ? show : !this.state.showSidebar
    this.setState({ showSidebar })
  }
  handleCloseIfOpen () {
    if (this.state.showSidebar) {
      this.handleToggleVisibility()
    }
  }
  // TODO manage scrolling (e.g. big masthead)
  isWide () {
    return !w ? true : w.innerWidth > 720
  }
  handleResize ({ target: { innerWidth } }) {
    this.setState({ wide: this.isWide() })
  }
  componentDidMount () {
    w.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount () {
    w.removeEventListener('resize', this.handleResize)
  }
  renderMenuItems (showFullMenu) {
    return [
      <Menu.Item key={0} header as={Link} to={prefixLink('/')}>
        <Icon name='subway' />
        OpenPOA Blockchain Home
      </Menu.Item>,
      <Menu.Menu key={1} position='right'>
        {showFullMenu ? (
          config.menuItems.map(({ name, icon, link }) => {
            const external = link.indexOf('http') === 0
            return (
              <Menu.Item
                key={name}
                as={Link}
                to={!external ? prefixLink(`/${link}/`) : undefined}
                href={external ? link : undefined}
                target={external ? '_blank' : undefined}
              >
                <Icon name={icon} />
                {name}
              </Menu.Item>
            )
          })
        ) : (
          <Menu.Item as='a' onClick={this.handleToggleVisibility}>
            <Icon name='list layout' />
          </Menu.Item>
        )}
      </Menu.Menu>
    ]
  }
  render () {
    const { wide, showSidebar } = this.state
    const sidebarVisible = config.menuItems.length >= minItems && !wide && showSidebar
    const showMiniMenu = config.menuItems.length >= minItems && wide
    return (
      <div>
        {sidebarVisible &&
          <Sidebar
            as={Menu} visible inverted vertical icon='labeled'
            style={{ position: 'fixed', zIndex: '104' }}
          >
            {this.renderMenuItems(showMiniMenu)}
          </Sidebar>
        }
        <Dimmer.Dimmable
          dimmed={sidebarVisible}
          onClick={this.handleCloseIfOpen}
          style={{ minHeight: '100vh' }}
        >
          <Dimmer simple active={sidebarVisible} style={{ zIndex: '103', opacity: '0.5' }} />
          <Sidebar
            as={Menu}
            visible
            size='small'
            direction='top'
            style={{ position: 'fixed' }}
          >
            {this.renderMenuItems(!sidebarVisible)}
          </Sidebar>
          <div
            style={{ paddingTop: '38px' }}
          >
            {this.props.children}
          </div>
        </Dimmer.Dimmable>
      </div>
    )
  }
}

SideMenu.propTypes = {
  children: PropTypes.node.isRequired
}
