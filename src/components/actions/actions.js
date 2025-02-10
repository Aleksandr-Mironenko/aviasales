export const all = () => ({ type: 'CHOICE_ALL' })
export const transfer0 = () => ({ type: 'CHOICE_TRANSFER0' })
export const transfer1 = () => ({ type: 'CHOICE_TRANSFER1' })
export const transfer2 = () => ({ type: 'CHOICE_TRANSFER2' })
export const transfer3 = () => ({ type: 'CHOICE_TRANSFER3' })
export const load = () => ({ type: 'LOAD' })
export const pushTickets = (id, tickets) => ({ type: 'PUSH_TICKETS', id, tickets })
export const errorFetch = () => ({ type: 'ERROR_FETCH' })
export const offline = (bool) => ({ type: 'OFFLINE', bool })
export const addAmountRenderTicket = () => ({ type: 'ADD_AMOUNT_RENDER_TICKET' })
export const sizeMonitor = (size = window.innerWidth) => ({ type: 'SIZE_MONITOR', size })
export const listenerOnline = () => {
  return (dispatch) =>
    window.addEventListener('offline', () => {
      dispatch(offline(true))
    })
}

export const listenerOffline = () => {
  return (dispatch) =>
    window.addEventListener('online', () => {
      dispatch(offline(false))
    })
}

export const handleTabsClick = (chooseTabs) => {
  return { type: 'CHOICE_TABS', chooseTabs }
}

export const getTickets = (searchId, retries = 5) => {
  return async (dispatch) => {
    dispatch(load)
    try {
      const searchContent = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

      if (!searchContent.ok || searchContent.stop) {
        throw new Error()
      }
      const content = await searchContent.json()
      dispatch(pushTickets(searchId, content.tickets))
      dispatch(load)
    } catch (error) {
      if (retries > 0) {
        dispatch(getTickets(searchId, retries - 1))
      } else {
        dispatch(errorFetch())
      }
    }
  }
}

export const getId = (retries = 5) => {
  return async (dispatch) => {
    dispatch(load)
    try {
      const searchIdServer = await fetch('https://aviasales-test-api.kata.academy/search')

      if (!searchIdServer.ok) {
        throw new Error()
      }
      const searchId = await searchIdServer.json()
      dispatch(getTickets(searchId.searchId))
      dispatch(load)
    } catch (error) {
      if (retries > 0) {
        dispatch(getId(retries - 1))
      } else {
        dispatch(errorFetch())
      }
    }
  }
}
