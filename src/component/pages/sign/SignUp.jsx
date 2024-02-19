import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
const SignUp = () => {
    const { createUser, googleRegister } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleGoogleRegister = () => {
        googleRegister()
            .then(res => {
                console.log(res);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axios.post('http://localhost:4321/user', userInfo)
                    .then(res => {
                        console.log(res.user);
                        navigate(location?.state ? location.state : '/')
                    })
            })
            .catch(err => console.error(err.message))
    }

    const onSubmit = (data) => {


        const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (data.password.length < 6) {
            return <p>Your password should not be less than 6 characters</p>
        }
        else if (regex.test(data.password)) {
            return <p>You can not use any capital letter or any special characters</p>
        }

        setError('');

        createUser(data.email, data.password)
            .then(res => {

                setSuccess('');
                updateProfile(res.user, {
                    displayName: data.name,
                    photoUrl: data.photo
                })
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch(err => {
                        console.error(err.message);
                    })


                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photoUrl: data.photo
                }
                axios.post('http://localhost:4321/user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire("You signed up successfully!");
                            navigate(location?.state ? location.state : '/');
                        }
                        else {
                            Swal.fire("Your signed up failed!");
                        }
                    })

            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }

    return (
        <div>
            <div className="my-10">
                <div className="w-5/6 mx-auto">
                    <div className="w-2/3 gap-8 mx-auto">
                        <div className="flex-1 text-center py-10 bg-[#0F1BB2] w-full">
                            <h1 className="text-5xl font-bold text-white">Sign up now!</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name='name' {...register("name")} type="text" placeholder="Type your name here" className="w-full input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photo' {...register("photo")} type="text" placeholder="give your photo url here" className="w-full input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" {...register("email")} placeholder="email" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' {...register("password")} type="password" placeholder="password" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <button type='submit' className='all-btn w-full'>Sign up</button>
                            </div>
                            <h1>Already have an account? <a className='text-blue-700' href='/signIn'>Sign in</a> here</h1>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                        </form>
                        <div className='flex justify-center mt-5'>
                            <button onClick={handleGoogleRegister} className='w-4/5 mx-auto btn btn-outline hover:text-white border-[#0F1BB2] hover:bg-[#0F1BB2]'><FaGoogle></FaGoogle> Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;