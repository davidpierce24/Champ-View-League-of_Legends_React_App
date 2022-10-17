import { useEffect, useState } from "react";
import AllChampionsList from "../components/AllChampionsList";
import Navbar from "../components/Navbar";


const Main = props => {
    const [load, setLoad] = useState(false);

    // useEffect(() => {
    //         setTimeout(() => {
    //         setLoad(true)
    //     }, 2000 )
    // }, [])


    const backgrounds = ["Yasuo_18", "KogMaw_28", "Lux_40", "LeeSin_11", "Nunu_16", "Vayne_11", "Garen_13", "Gwen_1", "DrMundo_3", "Jinx_37" ]
    const randomBackground = backgrounds[Math.floor(Math.random()*10)]

    const myStyle = {
        backgroundImage: `URL("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomBackground}.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', 
    }

    return (
        
            <div style={myStyle}>
                <Navbar />
                {/* <p className='text-white text-9xl pt-80 font-serif' >RIOT</p> */}
                {/* <img src="https://1l84rj2eepdd3xktbl163vrw-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/riotwhitep.png" alt="pic" className="m-auto w-sm sm:w-lg pt-60 " /> */}
                <p style={{fontFamily: 'Josefin Sans'}} className="m-auto w-sm sm:w-lg pt-80 pb-10 drop-shadow-md text-white text-6xl sm:text-8xl lg:text-9xl ">Champ View</p>

                {/* <div className={load ? "": "hidden"}> */}
                <div>
                    <AllChampionsList  /> 
                    <p className="text-white p-10 text-xs">Champ View isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
                </div>

                {!load && <div className="flex justify-center items-center">
                    <svg className="animate-spin" fill="none" height="80" viewBox="0 0 20 20" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="white"/></svg>
                </div>}

            </div>
            
    )
}

export default Main;