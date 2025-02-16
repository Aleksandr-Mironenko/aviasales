import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Ticket from '../Ticket'
import actions from '../actions'
import Offline from '../Offline'

const AppData = ({ store, getId, listenerOnline, listenerOffline }) => {
  const { filterTickets, offline, amountRenderTicket} = store //, all, transfer0, transfer1, transfer2, transfer3, chooseTabs
  useEffect(() => {
    getId()
  }, []) //all, transfer0, transfer1, transfer2, transfer3, chooseTabs

  useEffect(() => {
    listenerOnline()
    listenerOffline()
  })

  const firstFive = filterTickets.filter((item, index) => {
    item.index = index
    return item.index < amountRenderTicket
  })
  const elements = firstFive.map((item, index) => {
    return <Ticket key={index} {...item} />
  })

  return <div>{offline ? <Offline /> : elements}</div>
}

const mapStateToProps = (state) => ({ store: state })

export default connect(mapStateToProps, actions)(AppData)
