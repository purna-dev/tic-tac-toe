import React,{useState,useEffect} from 'react'
import './Game.css'
import Box from '../box/Box'
import o from '../../assets/o.png'
import x from '../../assets/x.png'



function Game_Board() {
  let [game_box,setgame_box] = useState(Array(9).fill(null))
  let [turn,setTurn] = useState('o');
  let [boolclick,setBoolclick] = useState(false);

  let [player,setplayer]= useState()
  let [player2,setplayer2]= useState()


  function clickBox(e){
    console.log(e)
    if(e){
      setBoolclick(!boolclick)
    }

  }

  function getPlayer(){
   let p =   localStorage.getItem('players');

    console.log(JSON.parse(p).your)

    if(JSON.parse(p).your.choice === 'o'){
      setTurn('o')

    }else{
      setTurn('x')
    }

  }


  
  console.log(game_box)

  return (
    <>
     <div className='score_b'>

     <div>

    {
      turn ==='o'?
      <div>
      <img src={o}/>
      <img src={x}/>
      </div> 
      :
      <div>
      <img src={x}/>
      <img src={o}/>
      </div> 
    }



     </div>

     <div>
      {turn} Turn
     </div>

     <div>

     </div>



     </div>

      <div className='grid'>
      {game_box.map((i,e)=>{
        return <Box id={i} handelClick={clickBox} />
      })}
    </div>
    </>
    
  )
}

export default Game_Board