import React from 'react';

const AddCoffee = () => {
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>

            {/* form row of coffee name and available quantity */}
            <form>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'> Coffee Name</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='name' placeholder='Coffee Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text ml-4'> Available Quantity</span>
                        </label>
                        
                        <label className='input-group'>
                            <input type="text" placeholder='Available Quantity' name='quantity' className='input input-bordered w-full ml-4' />
                        </label>
                    </div>
                </div>
            </form>
            {/* form row of supplier and taste */}
            <form>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'> Supplier Name</span>
                        </label>
                        
                        <label className='input-group'>
                            <input type="text" name='Supplier' placeholder='Supplier Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text ml-4'> Taste</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" placeholder='Taste' name='Taste' className='input input-bordered w-full ml-4' />
                        </label>
                    </div>
                </div>
            </form>
            {/* form row of category and details */}
            <form>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'> Category</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='Category' placeholder='Category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text ml-4'> Details</span>
                        </label>
                        
                        <label className='input-group'>
                            <input type="text" placeholder='Details' name='Details' className='input input-bordered w-full ml-4' />
                        </label>
                    </div>
                </div>

                {/* form row of photo url */}

                <div className='mb-8'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'> Photo URL</span>
                        </label>
                        
                        <label className='input-group'>
                            <input type="text" name='Photo' placeholder='Photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>




                </div>

                <input type="Submit" value="Add Coffee" className='btn btn-block bg-orange-400' />

            </form>






        </div>
    );
};

export default AddCoffee;