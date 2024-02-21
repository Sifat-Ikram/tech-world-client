import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { SiAudiotechnica } from "react-icons/si";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><a className='uppercase rounded-md' href={'/'}>HOME</a></li>
        <li><a className='uppercase rounded-md' href={'/addProduct'}>Add Product</a></li>
        {
            user && <li><a className='uppercase rounded-md' href={'/myCart'}>My Cart</a></li>
        }
        <li><a className='uppercase rounded-md' href={'/about'}>About Us</a></li>
        {
            !user && <li><a className='uppercase rounded-md' href={'/signUp'}>Sign up</a></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res))
            .catch(err => {
                console.error(err.message);
            })
    }

    return (
        <div className='w-11/12 py-5 mx-auto'>
            <div className="flex items-center w-full">
                <div className="flex items-center md:gap-5 navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-[#0845F4] font-semibold rounded-xs menu-md dropdown-content bg-white mt-3 z-[1] p-2 shadow-xl w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="flex items-center justify-center gap-2 mr-10 text-left cursor-pointer" href='/'>
                        <SiAudiotechnica className='md:text-3xl lg:text-5xl' />
                        <h1 className='font-lato text-[#0F1BB2] text-xs md:text-3xl lg:text-5xl font-extrabold uppercase italic'>TechWorld</h1>
                    </a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="menu text-[#0F1BB2] text-lg font-bold menu-horizontal px-1 space-x-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center gap-3">
                                <h1>{user.displayName}</h1>
                                <img src={user.photoURL} className="w-16 h-16 rounded-full" />
                                <button onClick={handleLogOut} className='text-white btn btn-outline all-btn'>Sign out</button>
                            </div>
                            :

                            <Link to={'/signIn'}>
                                <button className='text-white btn btn-outline all-btn'>Sign in</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;