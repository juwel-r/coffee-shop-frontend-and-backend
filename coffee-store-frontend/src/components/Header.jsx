import logo from '../assets/logo1.png'
import headerBg from '../assets/header-bg.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<header style={{backgroundImage: `url(${headerBg})`}} className='bg-cover bg-center bg-no-repeat py-2'>
<div className='w-11/12 mx-auto flex flex-row-reverse justify-between items-center'>
<Link to='/' className='flex items-center justify-center'>
    <img className=' max-h-28' src={logo} alt="" />
    <h1 className='text-4xl font-bold text-white'>Coffee Shop</h1></Link>
    <div className='flex gap-4 text-white font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/'>Coffee</Link>
        <Link to='/users'>Users</Link>
        <Link to='/sign-up'>SignUp</Link>
    </div>
</div>
</header>
    );
};

export default Header;