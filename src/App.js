import React from 'react'
import './App.css'

function App() {
  return (
    <div className='container'>
        <div className="img__container">
            <img src="../images/G-320.webp" alt="" className="main__img" />
            <div className="subImg__container">
                <img src="../images/G-320.webp" alt="" className="subImg" />
                <img src="../images/H-320.webp" alt="" className="subImg" />
                <img src="../images/I-320.webp" alt="" className="subImg" />
            </div>
        </div>

        <div className="content__container">
            <h1 className="title">Sharjah American Internation School</h1>
            <div className="ratings">
                <div className="star__container">
                    <img src="../images/star-fill.png" alt="" className="star" />
                    <img src="../images/star-fill.png" alt="" className="star" />
                    <img src="../images/star-fill.png" alt="" className="star" />
                    <img src="../images/star-fill.png" alt="" className="star" />
                    <img src="../images/star-grey.png" alt="" className="star" />
                </div>
                <div className="rating__container">
                    <p className="scl__rating">4.0</p>
                    <p className="votes">(8 votes)</p>
                </div>
            </div>
            <div className="location">
                <img src="../images/map-pin-line.png" alt="" className="location__logo" />
                <p className="location__text">Al Ramaqia - opposite Al Ramaqia park, UAE</p>
            </div>
            <div className="scl__details">
              <div className="one__detail">
                <p className="left__text">
                School
                </p>
                <p className="right__text">
                Day School
                </p>
              </div>
              <div className="one__detail">
                <p className="left__text">
                Category :
                </p>
                <p className="right__text">

                </p>
              </div>
              <div className="one__detail">
                <p className="left__text">
                Curriculum :
                </p>
                <p className="right__text">
                    
                American, Arabic    
                </p>
              </div>
              <div className="one__detail">
                <p className="left__text">
                  School Type:  
                </p>
                <p className="right__text">
                    Co-Ed School
                </p>
              </div>
              <div className="one__detail">
                <p className="left__text">
                    Grade Upto:
                </p>
                <p className="right__text">
                    FS1 to Grade10
                </p>
              </div>
              <div className="one__detail">
                <p className="left__text">
                    Establishment Year:
                </p>
                <p className="right__text">
                    1997
                </p>
              </div>
            </div>

        </div>

        <div className="btn__container">
            <p className="fee__info">Fee: 26000 to /year</p>
            <button className="view__school"> VIEW SCHOOL</button>
            <button className="review">WRITE A REVIEW</button>
            <button className="get__call">
                <img src="../images/phone-line.png" alt="" className="phone__logo" />
                <p className="call__text">GET A CALL</p>
            </button>
        </div>
    </div>
  )
}

export default App