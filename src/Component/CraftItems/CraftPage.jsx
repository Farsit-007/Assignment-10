import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";
import {  Cursor, useTypewriter } from 'react-simple-typewriter'
const CraftPage = () => {
    const [crafts, setCraft] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setCraft(data)
            })
    }, [])
    const [text] = useTypewriter({
        words: ['Items','Items'],
        loop: {},
      })

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center my-10 App">
                <h1 className="text-5xl ">Crafts <span className="text-[#b70050]">
                {text}<Cursor /></span></h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    crafts.slice(0, 6).map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default CraftPage;