import React, { PropTypes, Component } from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import {AldFavicon} from './assets/favicon.png'

const BUILD_TIME = new Date().getTime()

export default class Html extends Component {
  render () {
    const title = DocumentTitle.rewind() || config.siteTitle

    let css
    let favicon
    if (process.env.NODE_ENV === 'production') {
      css = <link rel='stylesheet' type='text/css' href={prefixLink(`styles.css?t=${BUILD_TIME}`)} />
      favicon = <link rel="icon" href={prefixLink(`favicon.png`)} type="image/png" />
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>{title}</title>
          {favicon}
          {css}
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{ __html: this.props.body }} style={{ minHeight: '100%' }} />
          <script src={prefixLink(`bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string
}
