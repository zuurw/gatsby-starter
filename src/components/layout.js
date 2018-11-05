import Footer from '../components/footer'
import React from 'react'
import { css } from 'react-emotion'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        className={css`
        display:flex;
        flex-direction:column;
        height:100%;
        min-height:100vh;
      `}>
        <div className={css`
          flex:1;
        `}>
          {children}
        </div>
        <Footer className={css`
          flex:none;
        `} />
      </div>
    )
  }
}

export default Template
