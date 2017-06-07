import React from 'react'
import injectSheet from 'mui-jss-inject'
import MarkdownRenderer from 'react-markdown-renderer'

const styles = {
  markdownInner: {
    margin: [0, '25%'],
    fontFamily: '"Roboto"'
  },
  markdownMain: {
    paddingLeft: 10,
    overflowY: 'auto',
    height: '100%',
    width: '100%'
  }
}

const Markdown = ({ classes, markdown }) => (
  <div className={classes.markdownMain}>
    <div className={classes.markdownInner}>
      <MarkdownRenderer markdown={markdown} />
    </div>
  </div>
)

export default injectSheet(styles)(Markdown)
