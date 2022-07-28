import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const SkinModal = props => {
    const [champData, setChampData] = useState(null)
    const [champID, setChampID] = useState(props.champName)
    const [skinNum, setSkinNum] = useState(props.skinID)

    const modalImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champID}_${skinNum}.jpg`

    const handleOnClose = (e) => {
        if(e.target.id === 'container'){
            props.onClose();
        }
    };

    if(!props.modalOn) return null;


    return ( 
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-neutral-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            {
            modalImage ? <div className="">
                <img src={modalImage} alt='skin' className='w-full lg:max-w-6xl rounded-xl' />
                
            </div> : <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span></span>
                        </div>
                    </div>
            }
            
        </div>
    )
}

export default SkinModal;