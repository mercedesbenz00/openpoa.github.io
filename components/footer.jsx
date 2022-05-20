import React, { Component } from 'react'
import { Icon, Container, Grid } from 'semantic-ui-react'

export default class Footer extends Component {
  render () {
    return (
      <Grid style={{ marginTop: '0' }}>
        <Grid.Column width={16} color='grey'>
          <Container>
            <Grid>
              <Grid.Column width={16} textAlign='center'>
                <Icon name='birthday' />
                OpenPOA Network (POA) originally deployed as POA Network, launched on 12/15/17
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}
