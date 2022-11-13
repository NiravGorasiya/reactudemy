import React from 'react'
import "./ExpenseDate.css"
const ExpenseDate = (props) => {   
  return (
    <div className='expense-date'>    
        <div className='expense-date-month'>{props.props.toLocaleDateString('en-US',{month:'long'})}</div>
        <div className='expense-date-year'>{props.props.getFullYear()}</div>
       <div className='expense-date-day'>{props.props.toLocaleDateString('en-US',{day:"2-digit"})}</div>
    </div>
  )
}

export default ExpenseDate