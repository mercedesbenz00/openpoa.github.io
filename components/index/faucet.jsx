import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import LinkButton from '../link_button'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          2. Start using OpenPOA
          <Header.Subheader>OpenPOA Faucet Services</Header.Subheader>
        </Header>
        <Header as='h4' content='Automated Faucets' inverted />
        <p>Automated Faucet Services will be available for use soon! For now, please request some POA test coins using one of the methods below:</p>
        <Header as='h4' content='Request Testnet POA Coins by email' inverted />
        <p>To start developing or to experience the speed, reliability & convenience of OpenPOA's Blockchains, send a request below.</p>
        <LinkButton to='mailto:devs@openpoa.com' content='Request Free Testnet POA' basic inverted />
        <Header as='h4' content='Need more coins for testing?' inverted />
        <p>Prominent contributers can receive larger amounts of Testnet POA for larger projects or request Mainnet POA coins for dapp deployment for use with partnership opportunities.</p>
        <Header as='h4' content='Request in Telegram Chat' inverted />
        <p>
          You can also request some Testnet POA Coins in the OpenPOA Telegram support channel.{' '}
        </p>
        <LinkButton to='https://t.me/openpoa' content='Request Testnet POA in Telegram' basic inverted />

      </Grid.Column>
    )
  }
}
