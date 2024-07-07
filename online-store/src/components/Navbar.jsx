//import {Link} from 'react-router-dom';
import Menu from '../assets/icons/menu_hamburger.png';
import Profile from '../assets/icons/profile.png'


export default function Navbar() {
    return (
        <div className="my-12 mx-6 sm:mx-20 font-medium flex justify-between font-headings">
            <div>
                <h1 className=' text-xl sm:text-2xl leading-6'>ShoeBank</h1>
            </div>
            <div className='visible sm:invisible'>
                <img src={Menu} className='w-6 h-6'></img>
            </div>
            <div className='invisible sm:visible flex flex-row justify-between gap-x-10 text-base'>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className='invisible sm:visible'>
                <img src={Profile}></img>
            </div>
        </div>
    )
}