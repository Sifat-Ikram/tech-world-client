import { Link } from "react-router-dom";
import error from "../../../assets/4e19c2d8da38136202aa53345057f601.jpg"

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={error} alt="" className='h-[500px] w-3/5' />
            <Link to={'/'}>
                <button className='all-btn'>Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;