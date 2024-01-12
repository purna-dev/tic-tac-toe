import React,{useEffect,useState} from 'react'
import useQuotesApi from '../../utility/useQuotesApi'
import box_img from '../../assets/group_1.png'
import './Quotes.css'

function Quotes() {

    let [advice,setAdvice]=useState('null')


   function quotes(){
    let data = useQuotesApi()

        data.then((e)=>{
            console.log(e)
            setAdvice(e)
    
                }).catch((e)=>{
                    console.log(e)
                })
    setTimeout(quotes,10000)
   }

   useEffect(()=>{
    quotes()
   },[])

  return (
    <>
        <div className='box'>
        <span>Quote #1</span>
        <p>" {advice} "</p>

        <div className='cir'>
            <img src={box_img}/>
        </div>

        </div>
    </>
  )
}

export default Quotes