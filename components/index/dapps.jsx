import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Dapps extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          Dapps
          <Header.Subheader>OpenPOA Foundation dapps</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='github'
          content='View Dapps'
          to='https://sokol.dapps.openpoa.com/'
        />
        <br /><br />
        <p>OpenPOA is evolving and there are exciting bleeding edge features coming soon to the Horizon. Learn more and contribute on Github.</p>
      </Grid.Column>
    )
  }
}

Dapps.propTypes = {

}
