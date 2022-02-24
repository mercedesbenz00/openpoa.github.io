import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import IconHeader from './icon_header'

export default class IconColumn extends Component {
  render () {
    return (
      <Grid.Column>
        <IconHeader {...this.props} />
      </Grid.Column>
    )
  }
}
