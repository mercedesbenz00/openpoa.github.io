import React, { Component } from 'react'
import { Header, Grid, List } from 'semantic-ui-react'
import LinkButton from '../link_button'

const trufflConfig = `opSokol: {
  host: 'localhost',
  port: 8545,
  network_id: '77'
}`

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          3. Develop!
          <Header.Subheader>Deploy your Contracts</Header.Subheader>
        </Header>
        <p>Once you have a Connection Method and some POA Coins, you're ready to go!</p>
        <p>The Ethereum Virtual Machine (EVM) development ecosystem is ever-growing allowing you to use any of the same tools that you're already familiar with.</p>
          <p>OpenPOA uses Solidity for on-chain smart contracts. This opens up endless opportunities for its developers, community & users to migrate their existing habits onto OpenPOA Sokol Testnet & Core Mainnet.</p>
        <Header as='h4' content='Truffle' inverted />
        <p>Truffle is the most popular development framework for Ethereum. You can connect to OpenPOA Chains using one of the following methods:</p>
        <List ordered inverted>
          <List.Item>
            Use OpenEthereum full node and add the config to your project's <code>truffle-config.js</code>:
            <pre>
              <code>{trufflConfig}</code>
            </pre>
          </List.Item>
          <List.Item>
            Use an
            {' '}
            <a href='https://github.com/trufflesuite/truffle-hdwallet-provider' target='_blank'>
              HD Wallet Provider
            </a>
            {' '}
            to connect to a remote RPC node such as the one provided on this page, in the 'Connect to OpenPOA' Section
          </List.Item>
        </List>
        <LinkButton
          basic
          inverted
          content='Truffle Framework'
          to='https://truffleframework.com'
        />
      </Grid.Column>
    )
  }
}
