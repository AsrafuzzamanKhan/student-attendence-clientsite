import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext)


    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error.message))

    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl rounded  '>
                <h2 className='text-2xl text-center uppercase'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type='text'
                            {...register("name",
                                {
                                    required: "Name is required"
                                })}
                            placeholder="name"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600 mt-2' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='email'
                            {...register("email",
                                {
                                    required: true
                                })}
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 mt-2' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 Character or longer.' },
                                    pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Password must be contain least one number & one special character' }
                                })}
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}

                    </div>



                    <input className='btn btn-accent w-full my-3' value='Sign Up' type="submit" />
                </form>

                <p>Already Have an Account? <Link to='/login' className='text-secondary'>Please LOGIN</Link></p>
                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                </div>

                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;