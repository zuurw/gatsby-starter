import React from 'react'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <section>
        {children}
      </section>
    )
  }
}

export default Template
