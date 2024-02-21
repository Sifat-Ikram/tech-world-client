import { Link } from "react-router-dom";


const Choosing = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-10 px-10 py-5 lg:flex-row lg:justify-between">
                <figure>
                    <img src="https://i.ibb.co/gtvT95S/Consumer-Electronics.jpg" className="rounded-lg shadow-2xl" />
                </figure>
                <div className="w-3/5 space-y-5">
                    <h1 className="text-5xl font-bold text-center uppercase">Join Us</h1>
                    <p>
                        Discover cutting-edge gadgets, seize exclusive deals, and explore a vast array of products tailored to your needs. Benefit from expert advice, engage with a dynamic community of enthusiasts, and tap into lucrative seller opportunities. Collaborate with us for groundbreaking partnerships and enjoy unparalleled customer support every step of the way.
                    </p>
                    <div className="flex justify-end">
                        <Link to={"/signUp"}>
                            <button className='all-btn mt-3'>Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choosing;