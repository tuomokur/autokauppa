'use client'
import Nav from "../components/Nav.jsx";
import Link from "next/link.js";
import '../ui/car.css';

const CarPage = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <Link href={'/cars'}>Back</Link>
        <div className="carContainer">
          <img className='carImg' src="car_placeholder.jpg" alt="car image" />
          <h1 className='carTitle'>Brand name</h1>
          <p className='carPrice'>6000 &euro;</p>
          <p className='carMiles'>150000 km</p>
        </div>
      </div>
    </>
  )
}
export default CarPage