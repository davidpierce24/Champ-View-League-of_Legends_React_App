import axios from 'axios';
import { useEffect, useState } from 'react';
import ChampModal from './ChampModal';

const AllChampionsList = props => {
    const [champList, setChampList] = useState(null);
    const [search, setSearch] = useState("");
    const [modalOn, setModalOn] = useState(false);
    const [modalChampName, setModalChampName] = useState('');

    const handleOnClose = () => setModalOn(false);
    
    const allChampURL = "http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json";
    
    const champSplashImageBase = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

    useEffect(() => {
        axios.get(allChampURL)
            .then(res => setChampList(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='z-0' >
            <input type="text" placeholder="Search for Champ" className='form-control block m-auto w-1/2 my-5 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none opacity-80' onChange={e => setSearch(e.target.value.toLowerCase())} value={search}/>
            <div className='flex flex-wrap justify-around gap-10 mt-20 mx-20 pb-10'>
            {
                champList ? Object.values(champList).filter(champ => champ.name.toLowerCase().includes(search)).map((champ, i) => 
                    <div key={i} className="relative" onClick={e => {
                        setModalOn(true)
                        setModalChampName(champ.id)
                        }}>
                        {/* <p>{champ.id}</p> */}
                        <img className="w-full sm:max-w-md border rounded-xl border-slate-400 hover:scale-105 duration-75 " src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`} alt={`${champ.id} splash`} />
                        <p className='text-white text-3xl absolute inset-x-0.5 inset-y-1/3 sm:inset-y-1/2'>{champ.name}</p>
                    </div>
                ) : ""
            }
            {modalOn && <ChampModal modalOn={modalOn} onClose={handleOnClose} champName={modalChampName}  />}
            
            </div>
            
        </div>
    )
}

export default AllChampionsList;