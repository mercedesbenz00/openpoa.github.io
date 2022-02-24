import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          Explorer
          <Header.Subheader>Analyze Transactions</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='chain'
          content='OpenPOA Sokol Explorer'
          to='https://sokol.explorer.openpoa.com/'
        />
        <br /><br />
        <p>The OpenPOA Explorer is a state-of-the-art Blockchain application based on Blockscout by POA Network. View real-time block data in style.</p>
      </Grid.Column>
    )
  }
}
