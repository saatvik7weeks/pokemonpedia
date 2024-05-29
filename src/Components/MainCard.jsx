import {useState , useEffect , useRef} from 'react'
import Modal from './Modal';

export default function MainCard({info}) {
    const [currValue , setCurrValue] = useState(undefined) ;
    const myref = useRef() ;
    
    const func = async()=>{
        const data = await fetch(info.url) ;
        const reponse = await data.json() ;
        setCurrValue(reponse) ;
        
    }
     
    
    useEffect( ()=>{
        func() ;
        // console.log(currValue.sprites.other.dream_world.front_default) ;
    }, [])
    
    function handleOpenDialog(){
        myref.current.showModal() ;
    }
    function handleCloseDialog(){
        myref.current.close() ;
    }
    function myfunc(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      }
  return (
    <div className='boxes' >
        {
            currValue !== undefined && <>
            <h1>{myfunc(info.name)}</h1>
            <img src={currValue.sprites.other.dream_world.front_default} alt="" />
            <button onClick={handleOpenDialog} >Know More</button>
            <Modal ref={myref} obj={currValue} onclose={handleCloseDialog} ></Modal>

            </>
        }

    </div>
  )
}
