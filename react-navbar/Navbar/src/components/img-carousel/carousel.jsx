import React from 'react';
import './carousel.css'
import { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    
    const fetchImages = async () => {
        setLoading(true)
        const url = "https://www.reddit.com/r/aww/top/.json?t=all"
        const res = await fetch(url)
        const result = await res.json()
        const data = result.data.children
        
        const list = 
            data.filter(
                (item) => 
                    item.data.url_overridden_by_dest.includes('.jpg'))
                .map((item)=> item.data.url_overridden_by_dest)
        setImages(list)
        setLoading(false)
    }
    useEffect(() => {
        fetchImages();
    }, []) 

    const handleClick = (dir) => {
        // console.log('curr index', index);
        //0
        const lastIdx = images.length - 1;
        if (dir === 'left') {
          if (index === 0) {
            console.log('last idx ', lastIdx);
            setIndex(lastIdx);
          } else {
            setIndex((idx) => idx - 1)
          }
        } else if (dir === 'right') {
          if (lastIdx === index) {
            //8===8 -> index-> 0
            setIndex(0);
          } else {
            setIndex((idx) => idx + 1);
          }
        }
      }

    useEffect(()=>{
        const tid = setInterval(()=>{
            handleClick('right')
        }, 2000)
   
        return () => {
            clearInterval(tid);
        }
    }, [index]) 

    return (
        <div className="carousel">
            {loading ?
                <div>Loading ....</div> :
                    <>
                        <button onClick={()=> handleClick('left')}> <IoIosArrowBack /> </button>
                        <img src={images[index]} alt="Not found" />
                        <button onClick={()=> handleClick('right')} className='btn-right'> <IoIosArrowForward /> </button>
                    </>
            }
        </div>
    )
}
export default Carousel;