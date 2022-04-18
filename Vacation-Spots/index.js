import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

function App() {
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
  
  const spots = vacationSpots.map(card => {
    return(
      <Card
          place={card.place}
          price={card.price}
          timeToGo={card.timeToGo} 
        />
      )
    }
  )


  return(
  <div className='card--con'>{spots}</div>
  
)}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

