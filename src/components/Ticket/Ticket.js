import React from 'react'

import styles from './index.module.scss'

const Ticket = ({
  formatPrice,
  carrier,
  stopsThereString,
  stopsBackString,
  routeThere,
  routeBack,
  timeThere,
  timeBack,
  timeDurationThere,
  timeDurationBack,
  numberOfTransfersThere,
  numberOfTransfersBack,
}) => {
  return (
    <div className={styles.once}>
      <div className={styles.ticket}>
        <div className={styles.upper}>
          <div className={styles.price}>{formatPrice}</div>
          <img
            className={styles.logo}
            src={`https://images.daisycon.io/airline/?width=300&height=150&color=ffffff&iata=${carrier}`}
            alt="logoCompany"
          />
        </div>
        <div className={styles.lower}>
          <div className={styles.where}>
            <div className={styles.route}>
              <div>{routeThere}</div>
              <div>{timeThere} </div>
            </div>
            <div className={styles.lenght}>
              <div>В пути</div>
              <div>{timeDurationThere} </div>
            </div>
            <div className={styles.stops}>
              <div>{numberOfTransfersThere}</div>
              <div>{stopsThereString} </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.route}>
              <div>{routeBack} </div>
              <div>{timeBack} </div>
            </div>
            <div className={styles.lenght}>
              <div>В пути</div>
              <div>{timeDurationBack} </div>
            </div>
            <div className={styles.stops}>
              <div>{numberOfTransfersBack}</div>
              <div>{stopsBackString} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
