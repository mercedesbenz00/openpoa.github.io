import React, { Component } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

const MetamaskConfig = `Network Name: OpenPOA Sokol Testnet
New RPC URL: https://sokol.openpoa.com/
Chain ID: 77
Currency Symbol: OP
Block Explorer URL: https://sokol.explorer.openpoa.com/`

export default class Connect extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          1. Connect to OpenPOA
          <Header.Subheader>OpenPOA RPC Services</Header.Subheader>
        </Header>
        <p>Deploy your own Full Node on OpenPOA or use our supplied RPC Endpoint below to connect your dapp, wallet or developer environment to OpenPOA's Core or Sokol Chains:</p>
        <Header as='h4' content='Full OpenEthereum Node' inverted />
        <p>OpenPOA Sokol Chain Spec & bootnodes on Github</p>
        <pre><code>git clone -b sokol https://github.com/openpoa/poa-chain-spec.git</code></pre>
        <p>Start OpenEthereum w/ flags</p>
        <pre><code>openethereum --chain /repo/path/spec.json --reserved-peers /repo/path/bootnodes.txt</code></pre>
        <Button.Group>
          <LinkButton
            basic inverted
            to='https://github.com/openethereum/openethereum'
            content='OpenEthereum Repository'
          />
        </Button.Group>
        <Header as='h4' content='OpenPOA RPC Provider' inverted />
        <p>Connect your web3 wallet or dapp to OpenPOA Core or Sokol Chains using Custom RPC Provider Config below.</p>
        <pre>{MetamaskConfig}</pre>
        <LinkButton
          basic inverted
          to='https://metamask.io'
          content='Metamask Website'
        />
      </Grid.Column>
    )
  }
}
