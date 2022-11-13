import React from 'react'
import "./Expencesitem.css"
import ExpenseDate from './ExpenseDate'

const ExpenceItem = (props) => {
  return (
    <>
    {props.props.map((item)=>{
    
      return (
      <div className='expense-item'>
            <ExpenseDate props={item.date}/>
              <div className="expence-item_description">
                  <h2>{item.title}</h2>
                  <div className='expence-item_price'>${item.price}</div>
              </div>
          </div>
        )
        })
    }
    </>
  )
}

export default ExpenceItem