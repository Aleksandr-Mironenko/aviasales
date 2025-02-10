import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'
import Logo from '../Logo'
import Body from '../Body'
import Offline from '../Offline'
import Error from '../Error'

const App = ({ store }) => {
  const { offline, errorFetch } = store
  return (
    <>
      <Logo />
      {offline ? <Offline /> : errorFetch ? Error : <Body />}
    </>
  )
}

const mapStateToProps = (state) => ({ store: state })

export default connect(mapStateToProps, actions)(App)
