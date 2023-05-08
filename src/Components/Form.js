'use client'
import React from 'react'
import { useState, useRef, useEffect, useCallback  } from 'react'
import './FormStyles.css'

const Form = () => {
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const [x3, setX3] = useState(0);
    const [y, setY] = useState(0);

    //
    const xFocus = useRef(false);
    

    const G1C8 = -1.0067211678302;
    const G3C4 = 10.0633923018482;
    const handleClick = (e) => {
        e.preventDefault();
        setY(Math.round(Math.pow(Math.log((Math.pow(Math.pow(Math.exp(Math.pow(G1C8,5)),2),2)*x1)),5)+Math.pow(Math.log(Math.log(Math.pow(((1.0/(x1))*(x3*x2)),2))),5)+Math.pow(Math.log(Math.log(Math.pow(((1.0/(x1))*(x2*G3C4)),2))),5)));

    }
    
    useEffect(() => {
        xFocus.current.focus();
      }, []);
  return (
    <div className={`card  card2 flex flex-col   w-full`}>
        <div
            className='Div01 text-black flex flex-col items-center justify-center text-lg m-auto mt-10  rounded-xl shadow-xl  w-full h-[60vh] '
        >
            <h1 
                className='Maintext text-white w-[300px] bg-[#3434DB] rounded-lg mb-20 Font'
            >Calculate Ultimate Load Capacity of Beam column Joint</h1>
            <form className=' Form FX flex flex-col justify-center items-center ' onSubmit={handleClick}>
                <div className=' MB mb-5'>
                    <label htmlFor="x1" className='text-white TEXTWHITE Font'>Column bar area (mm sq)</label><br/>
                    <input
                        type="text"
                        id="x1"
                        ref={xFocus}
                        autoComplete="off"
                        onChange={(e) => setX1(Number(e.target.value))}
                        required
                        
                        onFocus={() => xFocus(true)}
                        onBlur={() => xFocus(false) }
                        className=' INPUT w-40 pl-2 rounded-lg h-10'
                            /><br/>

                </div>
                <div className='MB mb-5'>
                    <label htmlFor="x2" className='text-white TEXTWHITE .Font'>Beam depth (mm)</label><br/>
                    <input
                        type="text"
                        id="x2"
                        ref={xFocus}
                        autoComplete="off"
                        onChange={(e) => setX2(Number(e.target.value))}
                        required
                        className='INPUT w-40 pl-2 rounded-lg h-10'
                        onFocus={() => xFocus(true)}
                        onBlur={() => xFocus(false) }
                            /><br/>

                </div>

                <div className='MB mb-5'>
                    <label htmlFor="x3"className='text-white TEXTWHITE Font' >Axial load (ton)</label><br/>
                    <input
                        type="text"
                        id="x3"
                        ref={xFocus}
                        autoComplete="off"
                        onChange={(e) => setX3(Number(e.target.value))}
                        required
                        className='INPUT w-40 pl-2 rounded-lg h-10'
                        onFocus={() => xFocus(true)}
                        onBlur={() => xFocus(false) }
                            /><br/>

                </div>
                <button
                    className='btn bg-[#FFBE0B] w-40 h-10 rounded-lg hover:bg-[#023047] hover:text-white hover:border-2 border-white'
                >Calculate</button>
            </form>

        </div>
            <div className=' Div02 FY flex flex-col items-center mb-10'>
                <h1 className='text-white TEXTWHITE FontMedium'>The Ultimate Load Capacity</h1>
                <div className='Div03 bg-white w-40 h-10 flex flex-col items-center justify-center FX rounded-lg'>
                    <h1 className='H1 text-black'>{y}</h1>
                </div>

            </div>

        <div>
            
        </div>
    </div>
  )
}

export default Form
