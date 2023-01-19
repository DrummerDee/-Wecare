import React from 'react';
import '../Styles/Homepage.css';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <>
      <section className='homebody'>
        <header>
          <div className='sub_nav'>
            <h3> Call us at 1-800-932-2730 </h3>
          </div>
        </header>
        <main className='background'>
          <div className='text'>
            <h2> Have a peace of mind when you know We Care. </h2>
            <Link to='/plans'><h3> Find your home care plan </h3></Link>
          </div>
        </main>
      </section>
    </>
  )
}
