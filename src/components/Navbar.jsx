import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = props => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 20){
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? 'fixed flex bg-black bg-opacity-30 text-white h-20 top-0 right-0 left-0 items-center justify-start px-28 font-sans z-50' : 'fixed flex bg-black bg-opacity-0 text-white h-20 top-0 right-0 left-0 items-center justify-start px-28 font-sans z-50'}>
            <div className="text-2xl">
            {/* <img src="https://1l84rj2eepdd3xktbl163vrw-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/riotwhitep.png" alt="pic" className=" max-w-xs" /> */}
                <ul className="flex gap-10">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/champ/random"><li>Random Character</li></Link>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;