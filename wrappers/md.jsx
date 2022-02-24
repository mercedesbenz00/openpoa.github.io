import React, { PropTypes, Component } from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { Divider, Grid, Container } from 'semantic-ui-react'

export default class Mardkdown extends Component {
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <Grid padded>
          <Grid.Column width={16}>
            <Container text>
              <Divider hidden />
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
              <Divider hidden />
            </Container>
          </Grid.Column>
        </Grid>
      </DocumentTitle>
    )
  }
}

Mardkdown.propTypes = {
  route: PropTypes.object
}
