import React, { useState } from 'react'
import Card from './Card'
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";



function Testimonials(props) {

    let reviews = props.reviews;

    const [index,setindex] = useState(0);

    function leftshiftHandler() {

        
        if(index - 1 < 0){


            setindex(reviews.length - 1);
        }else{

                setindex(index - 1);

        }

    }

    function rightshiftHandler() {


        if(index + 1 >= reviews.length) {


            setindex(0);

        }else {

            setindex(index + 1);

        }


    }

    function surpriseHandler() {


       const randomindex =  Math.floor(Math.random() * reviews.length);

       setindex(randomindex);

    }


  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">

        <Card reviews = {reviews[index]}></Card>

        <div className="flex flex-col text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">


            <div className='space-x-10 mt-2'>

            <button className="cursor-pointer hover:text-violet-500"
                onClick={leftshiftHandler}>

                    <SlArrowLeftCircle />

            </button>

            <button className="cursor-pointer hover:text-violet-500"
                onClick={rightshiftHandler}>

                    <SlArrowRightCircle />

            </button>

            </div>

            <div className="mt-6">

                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                onClick={surpriseHandler}>

                    Surprise me

                </button>

            </div>

        </div>


    </div>
  )
}

export default Testimonials