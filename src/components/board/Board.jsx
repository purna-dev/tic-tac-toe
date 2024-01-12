import React,{useState} from 'react'
import './Board.css'
import x from '../../assets/x.png'
import o from '../../assets/o.png'
import o_b from '../../assets/o_b.png'
import x_w from '../../assets/x_w.png'
import Game_Board from '../board_start/Game_Board'


function Board() {

    let [boolX,setBoolX] = useState(false)
    let [boolO,setBoolO] = useState(false)
    let [boolBoard,setboolBoard] = useState(false)


    const playerX = (e)=>{

        if(e){
            
             boolX = true;
             boolO =false;
            console.log(boolX)
            

        }
        setBoolX(boolX)
        setBoolO(boolO)

    }

    const playerO = (e)=>{
        if(e){

            boolX = false;
            boolO =true;
            console.log(e)
            


        }
        setBoolO(boolO)
        setBoolX(boolX)

        
    }

    const setPlayer = (e)=>{

        if(e){

            let player = {
                your:{
                    choice:'null',
                    score:'0',
    
                },
                cpu:{
                    choice:'null',
                    score:'0',
    
                },
                ties:{
                    score:'0'
                }
            }


            if(boolX){
                player.your.choice='x';
                player.cpu.choice='o';
                localStorage.setItem('players', JSON.stringify(player));
                boolBoard = true
    
    
            }else{
                
                player.your.choice='o';
                player.cpu.choice='x';
                localStorage.setItem('players', JSON.stringify(player));
                boolBoard = true
    
    
            }

 setboolBoard(boolBoard)



        }
        
    }


  return (
    <>
    <div className='wrapper'>

   <div className={boolBoard ?'game_wrap_block':'game_wrap'}>

   <Game_Board />

   </div>



    <div className={boolBoard ?'game_wrap':'game_wrap_block'}>

    <div className='game_icons'>
        <img src={x} />
        <img src={o} />

    </div>

    <div className='pick_up'>
    <h2>pick player</h2>

    <div className='pick_up_sec'>
    <button className={boolX ? "changeP" : "changeF"} onClick={playerX}>
     x
    </button>
    <button className={boolO ? "changeP" : "changeF"} onClick={playerO}>
     o
    </button>

    </div>

    </div>

    {/* btn group */}

    <div className='btn_g'>

    <button onClick={setPlayer}>
    NEW GAME ( VS CPU )
    </button>

    
    <button>
    NEW GAME ( VS HUMAN ) Coming soon
    </button>

    
    <button>
    Invite your friend
    </button>

    </div>

</div>

    </div>
    
    </>
  )
}

export default Board