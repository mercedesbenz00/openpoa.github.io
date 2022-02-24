import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import LinkButton from '../link_button'

export default class Support extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          Support
          <Header.Subheader>Get Assistance</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='help'
          content='Chat on Telegram'
          to='https://t.me/openpoa'
        />
        <br /><br />
        <p>If you're having any issues, have questions, or a proposal for one of OpenPOA's chains, join us on Telegram and we'll do our best to answer as soon as possible.</p>
      </Grid.Column>
    )
  }
}
