import AllChampionsList from "../components/AllChampionsList";
import Navbar from "../components/Navbar";


const Main = props => {


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
            <img src="https://1l84rj2eepdd3xktbl163vrw-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/riotwhitep.png" alt="pic" className="m-auto w-sm sm:w-lg pt-60 " />
            <AllChampionsList />
            
        </div>
    )
}

export default Main;