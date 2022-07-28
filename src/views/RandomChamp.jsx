import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const RandomChamp = props => {
    const [backgroundChamp, setBackgroundChamp] = useState('Jinx_37');
    const [champArray, setChampArray] = useState([]);
    const [champName, setChampName] = useState(null);


    const allChampURL = "http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json";

    useEffect(() => {
        axios.get(allChampURL)
            .then(res =>  setChampArray(Object.values(res.data.data)))
            .catch(err => console.log(err))
    }, [])

    const randomRoll = (e) => {
        const rand = Math.floor(Math.random()*champArray.length);
        setBackgroundChamp(`${champArray[rand].id}_0`);
        setChampName(champArray[rand].name)
    }

    const myStyle = {
        backgroundImage: `URL("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${backgroundChamp}.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', 
    }
    

    return (
        <div style={myStyle}>
            <Navbar />
            <div className="flex flex-col justify-center items-center text-white py-80 px-5 font-serif w-full">
                <p className="text-3xl md:text-5xl pb-10">So you want to roll the dice?</p>
                <button className="font-sans mt-5 mb-2 w-fit inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={randomRoll}>Roll for Random Champ</button>
                {
                    champName ? <p className="text-3xl md:text-8xl mt-10 ">{champName}</p> : ""
                }
            </div>
        </div>
    )
}

export default RandomChamp;