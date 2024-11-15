import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName,ticker,price}: Props) : JSX.Element => {
  return (
    <div className='card'>
      <img
      src="https://t3.ftcdn.net/jpg/05/74/43/12/360_F_574431210_icdpLDlDxAfsNacnV56vIWb4pCRnaNBA.jpg"
      alt=""
      />
      <div className='details'>
        <h2>
          {companyName} ({ticker})
          </h2>
        <p>${price}</p>
      </div>
      <p className='info'> some text desc</p>
    </div>
  )
}

export default Card