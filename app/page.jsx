'use client'
import './ui/homePage.css';
import Nav from './components/Nav.jsx';
import Link from "next/link"


const HomePage = () => {
  return (
    <>
      <div className='main'>
        <header className='container'>
          <Nav />
          <div className="hero">
            <h1 className='hero-heading'>A Car store</h1>
            <h2 className='hero-heading'>cars Lorem, ipsum...</h2>
            <div className="search-form">
              <form className="search-form" action="" >
                <Link href="/cars"><button className='hero-buttons'>Find cars</button></Link>
                <select name="brand" id="brand">
                  <option value="" selected>Brand</option>
                  <option value="">Toyota</option>
                  <option value="">Fiat</option>
                  <option value="">Ford</option>
                  <option value="">Volkswagen</option>
                </select>
                <input type="text" placeholder='Max price' />
                <input type="text" placeholder='Max mileage' />
              </form>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
export default HomePage