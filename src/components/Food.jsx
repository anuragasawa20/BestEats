import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
    const [food, setfood] = useState(data);

    const filterType = (category) => {
        setfood(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setfood(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setfood(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={() => filterType('burger')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={() => filterType('pizza')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={() => filterType('salad')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Sandwich</button>
                        <button onClick={() => filterType('desserts')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Desserts</button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >$</button>
                        <button onClick={() => filterPrice('$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4 px-5'>
                {food.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 py-5' >
                        <img src={item.image} alt={item.name} className='w-full h-[250px] object-cover rounded-t-lg' />
                        <div className='flex flex-row justify-between px-2 py-4'>
                            <p className='font-bold' >{item.name}</p>
                            <p className='bg-orange-500 text-white p-1 rounded-full'>
                                <span>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Food;