import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {  Cursor, useTypewriter } from 'react-simple-typewriter'

const Subcategory = () => {
    const [text] = useTypewriter({
        words: ['Items','Items'],
        loop: {},
      })

      const [Subcrafts, setSubCraft] = useState([])
      useEffect(() => {
          fetch('http://localhost:5000/category')
              .then(res => res.json())
              .then(data => {
                  setSubCraft(data)
              })
      }, [])

    return (
        <div className='max-w-6xl mx-auto'>
             <div className="text-center my-10 App">
                <h1 className="text-5xl ">Crafts <span className="text-[#b70050]">
                {text}<Cursor /></span></h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    Subcrafts.map(sub => <div key={sub._id} className="card text-center flex flex-col gap-2 card-compact  p-2 bg-base-100 shadow-xl">
                    <div className="relative">
                        <figure className="rounded-xl" style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                            <img src={sub.image} alt="Shoes" className="object-cover h-full w-full" />
                        </figure>
                    </div>
    
                    <div className="space-y-1 text-center">
                       
                        <h2 className=" h-10 font-semibold text-xl">{sub.category}</h2>
                       
                        <div className="h-14">
                            <p>{sub.description}</p>
                        </div>
                        
    
                    </div>
                    <div className="card-actions justify-center items-end pt-2 mr-3">
                        <Link  to={`/suball/${sub.category}`}><button className="  bg-transparent text-lg font-bold  border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 "><MdKeyboardDoubleArrowRight size={30}/> View Details</button></Link>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Subcategory;