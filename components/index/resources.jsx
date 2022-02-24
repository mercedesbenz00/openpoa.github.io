import React, { Component } from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'

import Connect from './connect'
import Faucet from './faucet'
import Develop from './develop'

export default class Resources extends Component {
  render () {
    return (
      <Grid.Column>
        <Header inverted textAlign='center' as='h2'>
          Resources
          <Header.Subheader>Start using OpenPOA's Blockchains Today!</Header.Subheader>
        </Header>
        <Divider hidden />
        <Grid divided stackable columns={3}>
          <Connect />
          <Faucet />
          <Develop />
        </Grid>
      </Grid.Column>
    )
  }
}
