

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center mt-20 p-10 bg-[#0F1BB2] text-base-content rounded-none">
                <nav className="grid grid-flow-col gap-4">
                    <a className="font-semibold text-white link link-hover" href='/about'>About us</a>
                    <a className="font-semibold text-white link link-hover" href='/contact'>Contact</a>
                    <a className="font-semibold text-white link link-hover">Blog</a>
                    <a className="font-semibold text-white link link-hover">Press kit</a>
                </nav>
                <div className="block text-white cursor-pointer font-lato" href='/'>
                    <h1 className='md:text-4xl text-xl font-extrabold uppercase'>Tech World</h1>
                </div>
                <aside className='text-white'>
                    <p>Copyright © 2023 - All right reserved by Tech World Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;