import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import RadarChart from "../components/RadarChart";
import SkinModal from "../components/SkinModal";
import Navbar from "../components/Navbar";


const ViewChamp = props => {
    const { id } = useParams();
    const [champData, setChampData] = useState(null)
    const [modalOn, setModalOn] = useState(false);
    const [modalChampName, setModalChampName] = useState('');
    const [modalChampSkinID, setModalChampSkinID] = useState('');

    const champUrl = `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${id}.json`

    const handleOnClose = () => setModalOn(false);


    useEffect(() => {
        axios.get(champUrl)
            .then(res => setChampData(res.data.data[id]))
            .catch(err => console.log(err))
    }, [id]);



    return (
        <div className='bg-gradient-to-b from-blue-800 to-blue-300 flex justify-center text-white min-h-screen'>
            <Navbar />
            {
            champData ? <div className="px-20 py-28 w-full">
                <div className='flex justify-between flex-wrap g-5'>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt={champData.name} className='w-full xl:w-1/2 rounded-xl' />
                    <div className='flex xl:flex-col justify-start w-full xl:w-1/2 '>
                        <div className='flex flex-col px-10 items-start basis-1/2 justify-center xl:justify-start'>
                            <p className='text-5xl mb-3'>{champData.name}</p>
                            <p className='text-white opacity-60 mb-2 text-xl'>{champData.title}</p>
                            <p className='text-yellow-500 text-lg'>{champData.tags[0]} {champData.tags[1]} {champData.tags[2]}</p>
                            {/* <p className='text-white pt-5 text-md'>{champData.allytips}</p> */}
                        </div>
                        <div className='basis-1/2'>
                            <div className='flex justify-center'>
                                <RadarChart attack={champData.info.attack} defense={champData.info.defense} magic={champData.info.magic} difficulty={champData.info.difficulty} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-5 gap-5'>
                    <div className="basis-1/2 bg-black bg-opacity-20 p-5 rounded-xl">
                        <p className=' text-2xl underline pb-2' >Lore</p>
                        <p className=' text-lg ' >{champData.lore}</p>
                    </div>
                    <div className='bg-black bg-opacity-20 basis-1/2 rounded-xl w-fit p-5'>
                        <p className=' text-2xl underline pb-2'>Stats</p>
                    <div className=' flex flex-col flex-wrap h-fit lg:max-h-52 items-start   '>
                        {
                            Object.entries(champData.stats).map(([key,value], i) => 
                            <p className='text-md'>{key}: <span className="text-yellow-300">{value}</span></p>
                            )
                        }
                    </div></div>
                </div>

                <div className='flex flex-wrap gap-5 justify-center mt-10 pb-10'>
                    {
                        champData.skins.map((skin, i) =>
                            <div className='relative' onClick={e => {
                                setModalOn(true)
                                setModalChampName(id)
                                setModalChampSkinID(skin.num)
                                }}>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`} alt={skin.name} className='max-w-sm hover:scale-105 duration-75 rounded-lg' />
                                <p className='text-3xl absolute inset-x-0.5 inset-y-1/3 sm:inset-y-1/2'>{skin.name}</p>
                            </div>
                            
                        )
                    }
                </div>
                
            </div> : <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span></span>
                        </div>
                    </div>
            }
            {modalOn && <SkinModal modalOn={modalOn} onClose={handleOnClose} champName={modalChampName} skinID={modalChampSkinID} />}
        </div>
    )
}

export default ViewChamp;