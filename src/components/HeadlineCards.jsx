import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Yummy Pizzzza</p>
                    <p className='px-2'>throught 5/12</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='pizza' />
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'> New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='pasta' />
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Declicious Desserts</p>
                    <p className='px-2'>tasty treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='sphagetti' />
            </div>

        </div>
    )
}

export default HeadlineCards;