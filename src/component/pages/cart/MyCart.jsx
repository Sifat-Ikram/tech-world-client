import { MdDelete } from 'react-icons/md';
import { MdEditNote } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosPublic = useAxiosPublic();

    const handleDelete = item => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosPublic.delete(`cart/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting item:", error);
                    });

            }
        });
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-full py-5'>
                <h1 className='text-6xl text-center uppercase text-extrabold'>My Cart</h1>
            </div>
            <div className='p-2 mt-10'>
                <div className="mt-3 overflow-x-auto border-2 border-solid shadow-2xl">
                    <table className="table">
                        <thead className='bg-[#0845F4] rounded-lg'>
                            <tr>
                                <th className='text-base font-semibold text-white'></th>
                                <th className='text-base font-semibold text-white'>Image</th>
                                <th className='text-base font-semibold text-white'>Product Name</th>
                                <th className='text-base font-semibold text-white'>Price</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>{index + 1}</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.price}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/update/${item._id}`}>
                                            <MdEditNote className='p-2 text-4xl text-white bg-yellow-700 rounded-md cursor-pointer'></MdEditNote>
                                        </Link>
                                    </td>
                                    <td>
                                        <MdDelete onClick={() => handleDelete(item)} className='p-2 text-4xl text-white bg-red-700 rounded-md cursor-pointer'></MdDelete>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;