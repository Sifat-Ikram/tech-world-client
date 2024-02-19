import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><a className='rounded-md uppercase' href={'/'}>HOME</a></li>
        <li><a className='rounded-md uppercase' href={'/addProduct'}>Add Product</a></li>
        {
            user && <li><a className='rounded-md uppercase' href={'/myCart'}>myCart</a></li>
        }
        <li><a className='rounded-md uppercase' href={'/contact'}>CONTACT US</a></li>
        <li><a className='rounded-md uppercase' href={'/about'}>About Us</a></li>
        {
            !user && <li><a className='rounded-md uppercase' href={'/signUp'}>Sign up</a></li>
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
        <div>
            <div className="navbar w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-[#0845F4] font-semibold rounded-xs menu-md dropdown-content bg-white mt-3 z-[1] p-2 shadow-xl w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-left mr-10 cursor-pointer" href='/'>
                        <h1 className='font-lato text-[#0F1BB2] text-5xl font-extrabold uppercase italic'>TechWorld</h1>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-[#0F1BB2] text-lg font-bold menu-horizontal px-1 space-x-3">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex gap-3 items-center">
                                <h1>{user.displayName}</h1>
                                <img src={user.photoURL} className="h-16 w-16 rounded-full" />
                                <button onClick={handleLogOut} className='btn btn-outline all-btn text-white'>Sign out</button>
                            </div>
                            :

                            <Link to={'/signIn'}>
                                <button className='btn btn-outline all-btn text-white'>Sign in</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;