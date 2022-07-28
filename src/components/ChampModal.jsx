import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ChampModal = props => {
    const [champName, setChampName] = useState(props.champName)
    const [champData, setChampData] = useState(null)

    const champUrl = `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${champName}.json`

    const modalImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`

    useEffect(() => {
        axios.get(champUrl)
            .then(res => setChampData(res.data.data[champName]))
            .catch(err => console.log(err))
    }, [champName])

    const handleOnClose = (e) => {
        if(e.target.id === 'container'){
            props.onClose();
        }
    };

    if(!props.modalOn) return null;


    return ( 
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-neutral-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            {
            champData && modalImage ? <div className="bg-black bg-opacity-70 p-2 rounded-lg flex gap-5 max-w-3xl m-5">
                <img src={modalImage} alt={champData.name} className='w-1/2 sm:w-fit' />
                <div className='flex flex-col items-start pr-2'>
                    <p className='text-white pt-5 text-3xl '>{champData.name}</p>
                    <p className='text-white opacity-60 pt-1 text-xl'>{champData.title}</p>
                    <p className='text-yellow-500 pt-1 text-lg'>{champData.tags[0]} {champData.tags[1]} {champData.tags[2]}</p>
                    <p className='text-white pt-5 text-md hidden sm:block'>{champData.allytips}</p>

                    <p className='text-white pt-2 text-md'>Attack: {champData.info.attack}</p>
                    <p className='text-white pt-2 text-md'>Defense: {champData.info.defense}</p>
                    <p className='text-white pt-2 text-md'>Magic: {champData.info.magic}</p>
                    <p className='text-white pt-2 text-md'>Difficulty: {champData.info.difficulty}</p>
                    
                    <Link to={`/champ/${champData.id}`} className="w-full" ><button className=" mt-5 mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Check Out {champData.name}</button></Link>
                    
                    {/* <button onClick={props.onClose} >Close</button> */}
                </div>
                
            </div> : <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span></span>
                        </div>
                    </div>
            }
            
        </div>
    )
}

export default ChampModal;