import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'

import styles from './index.module.scss'

const Filter = ({ store, all, transfer0, transfer1, transfer2, transfer3 }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterP}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={styles.choises}>
        <div className={styles.choise} onClick={all}>
          <input
            className={styles.checkbox}
            name="all"
            type="checkbox"
            id="chk1-label-all"
            checked={store.all}
            onChange={all}
            onClick={all}
          />
          <label htmlFor="chk1-label-all"></label>
          <div className={styles.inputText}>Все</div>
        </div>
        <div className={styles.choise} onClick={transfer0}>
          <input
            className={styles.checkbox}
            name="trasfer0"
            type="checkbox"
            checked={store.transfer0}
            onChange={transfer0}
            onClick={transfer0}
          />

          <div className={styles.inputText}>Без пересадок</div>
        </div>
        <div className={styles.choise} onClick={transfer1}>
          <input
            name="trasfer1"
            type="checkbox"
            className={styles.inputCheckbox}
            checked={store.transfer1}
            onChange={transfer1}
            onClick={transfer1}
          />

          <div className={styles.inputText}>1 пересадка</div>
        </div>
        <div className={styles.choise} onClick={transfer2}>
          <input
            name="trasfer2"
            type="checkbox"
            className={styles.inputCheckbox}
            checked={store.transfer2}
            onChange={transfer2}
            onClick={transfer2}
          />

          <div className={styles.inputText}>2 пересадки</div>
        </div>
        <div className={styles.choise} onClick={transfer3}>
          <input
            name="trasfer3"
            type="checkbox"
            className={styles.inputCheckbox}
            checked={store.transfer3}
            onChange={transfer3}
            onClick={transfer3}
          />

          <div className={styles.inputText}>3 пересадки</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ store: state })

export default connect(mapStateToProps, actions)(Filter)
