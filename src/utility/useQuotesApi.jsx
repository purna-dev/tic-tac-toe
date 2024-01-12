import axios from 'axios'
// 
async function useQuotesApi() {

    try{
        let res = await axios.get('https://api.adviceslip.com/advice')
        // console.log()
        return res.data.slip.advice;

    }catch(e){
        console.error(e+' Error')
    }
  
}

export default useQuotesApi