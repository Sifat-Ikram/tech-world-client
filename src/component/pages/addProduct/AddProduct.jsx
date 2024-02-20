import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdatePage = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.data.display_url) {
            const productInfo = {
                name: data.name,
                type: data.type,
                price: parseFloat(data.price),
                rating: parseFloat(data.rating),
                brand: data.brand,
                details: data.details,
                image: res.data.data.display_url
            }

            const productRes = await axiosPublic.post("/service", productInfo);

            if (productRes.data.modifiedCount) {
                Swal.fire("Product added successfully");
                reset();
            }
        }
    }


    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className="w-4/5 min-h-screen mx-auto mt-14">
                    <div className="flex-col space-y-12 hero-content">
                        <div className="text-center bg-[#0845F4] w-full py-10">
                            <h1 className="text-5xl font-bold text-white">Add Product</h1>
                        </div>
                        <div className="w-full shadow-2xl card shrink-0">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control w-3/5 mx-auto">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-lg" />
                                </div>
                                <div className='lg:flex lg:justify-evenly'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input type="text" {...register("name")} placeholder="Full Name" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='lg:flex lg:justify-evenly'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Type</span>
                                        </label>
                                        <input type="text" {...register("type")} placeholder="Enter Division" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Price</span>
                                        </label>
                                        <input type="text" {...register("price")} placeholder="district" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='lg:flex lg:justify-evenly'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" {...register("rating")} placeholder="Type the names of places" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand</span>
                                        </label>
                                        <input {...register("brand")} type="text" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control w-4/5 mx-auto">
                                    <label className="label">
                                        <span className="label-text">Tour Description</span>
                                    </label>
                                    <textarea {...register("details")} className="textarea textarea-bordered" placeholder="Tour Description"></textarea>
                                </div>
                                <div className="mt-6 form-control">
                                    <button className="all-btn">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;