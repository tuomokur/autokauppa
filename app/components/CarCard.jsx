import '../ui/carCard.css';

const CarCard = () => {
  return (
    <>
      <div className="carCard">
        <img className='carCardImg' src="car_placeholder.jpg" alt="car image" />
        <div className="cardText">
          <h1 className='cardTitle'>Brand name</h1>
          <p className='cardPrice'>6000 &euro;</p>
          <p className='cardMiles'>150000 km</p>
        </div>
      </div>
    </>
  )
}

export default CarCard