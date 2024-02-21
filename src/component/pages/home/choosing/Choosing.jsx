import { Link } from "react-router-dom";


const Choosing = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-10 px-10 py-5 lg:flex-row lg:justify-between">
                <figure>
                    <img src="https://i.ibb.co/gT3MKKG/shutterstock-1798672534.jpg" className="rounded-lg shadow-2xl" />
                </figure>
                <div className="w-3/5 space-y-5">
                    <h1 className="text-5xl font-bold text-center">Who are we?</h1>
                    <p>
                        Tech World is a leading technology company specializing in innovative solutions across various sectors. With a focus on cutting-edge research and development, Tech World delivers products and services that revolutionize industries. From software development and artificial intelligence to hardware solutions and cybersecurity, Tech World is at the forefront of technological advancement. With a commitment to excellence and customer satisfaction, Tech World continues to shape the future of technology on a global scale.
                    </p>
                    <Link to={"/about"}>
                        <button className='all-btn mt-3'>About Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Choosing;