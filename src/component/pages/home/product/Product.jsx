import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const Product = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [] } = useQuery({
        queryKey: ['products.id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/service');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })


    if (!products.length) {
        return <span className="loading loading-dots loading-lg"></span>;
    }
    return (
        <div>
            <h1 className='my-10 text-4xl font-bold'>Featured Products</h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products.map(product => <div key={product.id} className="shadow-xl card card-compact bg-base-200">
                        <figure><img src={product.image} className="h-40" alt={product.name} /></figure>
                        <div className="flex flex-col items-center card-body">
                            <h1 className="card-title">{product.name}</h1>
                            <p className="text-lg font-semibold">Brand: {product.brand}</p>
                            <p className="text-lg font-semibold">Price: {product.price}</p>
                            <div className="justify-end card-actions">
                                <Link to={`/details/${product._id}`}><button className="btn btn-outline text-[#0845F4] border-[#0845F4] all-btn">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;