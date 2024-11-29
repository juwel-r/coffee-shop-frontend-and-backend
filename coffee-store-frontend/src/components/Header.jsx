import logo from '../assets/logo1.png'
import headerBg from '../assets/header-bg.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<header style={{backgroundImage: `url(${headerBg})`}} className='bg-cover bg-center bg-no-repeat  py-2'>
    <Link to='/' className='flex items-center justify-center'>
    <img className=' max-h-28' src={logo} alt="" />
    <h1 className='text-4xl font-bold text-white'>Coffee Shop</h1></Link>
</header>
    );
};

export default Header;