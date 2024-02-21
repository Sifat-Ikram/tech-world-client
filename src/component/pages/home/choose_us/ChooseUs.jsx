import  { TbTruckDelivery }   from 'react-icons/tb';
import { FcMoneyTransfer, FcOnlineSupport, FcCurrencyExchange } from 'react-icons/fc';

const ChooseUs = () => {
    return (
        <div>
            <h1 className='lg:text-4xl md:text-2xl text-sm font-bold text-center'>Why Choose Us?</h1>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 my-16'>
            <div className="flex space-x-4 p-3 hover:cursor-pointer rounded-md items-center border-2 border-solid text-white bg-blue-700">
                <div>
                    <TbTruckDelivery className='text-6xl'></TbTruckDelivery>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold'>Free Delivery</h1>
                    <p>Free shipping on all orders</p>
                </div>
            </div>
            <div className='flex space-x-4 p-3 hover:cursor-pointer items-center border-2 border-solid rounded-md text-white bg-blue-700'>
                <div>
                    <FcOnlineSupport className='text-6xl'></FcOnlineSupport>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold'>24/7 Online Support</h1>
                    <p>Online Support 24 hours</p>
                </div>
            </div>
            <div className='flex space-x-4 p-3 hover:cursor-pointer items-center border-2 border-solid rounded-md text-white bg-blue-700'>
                <div>
                    <FcMoneyTransfer className='text-6xl'></FcMoneyTransfer>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold'>Money Return</h1>
                    <p>Money back guarantee under 7 days</p>
                </div>
            </div>
            <div className='flex space-x-4 p-3 hover:cursor-pointer items-center border-2 border-solid rounded-md text-white bg-blue-700'>
                <div>
                    <FcCurrencyExchange className='text-6xl'></FcCurrencyExchange>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold'>Member Discount</h1>
                    <p>On every order over $150</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ChooseUs;