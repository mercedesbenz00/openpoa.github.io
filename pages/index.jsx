import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { config } from 'config'
import Masthead from '../components/index/masthead'
import AdvantagesGrid from '../components/index/advantages'
import Resources from '../components/index/resources'
import QuickLinks from '../components/index/quick_links'

import mastheadBg from '../assets/masthead_bg.jpg'

import svgBackgrounds from '../assets/svg-backgrounds.js'

export default class IndexTemplate extends Component {
  render () {
    return (
      <Grid padded className='root-grid'>
        <Grid.Column width={16} color={config.theme} className='masthead' style={{ backgroundImage: `url(${mastheadBg})` }}>
          <Masthead />
        </Grid.Column>
        <Grid.Column width={16} color={config.theme} style={{ backgroundImage: svgBackgrounds[0] }}>
          <Container>
            <AdvantagesGrid />
          </Container>
        </Grid.Column>
        <Grid.Column width={16}>
          <Container>
            <QuickLinks />
          </Container>
        </Grid.Column>
        <Grid.Column width={16} color={config.theme} style={{ backgroundImage: svgBackgrounds[1] }}>
          <Container>
            <Resources />
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}
