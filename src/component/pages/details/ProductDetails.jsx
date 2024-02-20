import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const TestDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products._id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/service');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })


    const filteredProduct = products.find(product => product._id === id);

    if (!filteredProduct) {
        return <span className="loading loading-dots loading-lg"></span>;
    }


    const { _id, name, image, brand, type, rating, details, price } = filteredProduct;

    const handleApply = () => {
        if (user && user.email) {

            const cartItem = {
                prodId: _id,
                email: user.email,
                name,
                image,
                type,
                rating,
                price,
                details,
                brand
            }
            axiosPublic.post('/cart', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your booked this test",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not signed in",
                text: "Please sign in to book test",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "sign in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn');
                }
            });
        }
    }

    return (
        <div className='mb-10'>
            <div className="w-10/12 mx-auto mt-10 space-y-8 text-left">
                <img src={image} className="w-full h-96" alt="" />
                <h1 className="text-4xl font-semibold">{name}</h1>
                <h1 className="text-lg font-medium">Brand: {brand}</h1>
                <h1 className="text-lg font-medium">Product Type: {type}</h1>
                <h1 className="text-lg font-medium">Product Rating: {rating}</h1>
                <h1 className="text-lg font-medium">Price: {price}</h1>
                <h1 className="text-base"><span className="text-2xl font-medium">Description: </span>{details}</h1>
                <div className='flex'>
                    <button onClick={handleApply} className="all-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;