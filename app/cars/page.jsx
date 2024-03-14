'use client'
import Link from "next/link.js";
import CarCard from "../components/CarCard.jsx";
import Nav from "../components/Nav.jsx";
import '../ui/cars.css';

const SearchPage = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <Link className="link" href={'/'}>Back</Link>
        <div class="cardContainer">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </>
  )
}
export default SearchPage
