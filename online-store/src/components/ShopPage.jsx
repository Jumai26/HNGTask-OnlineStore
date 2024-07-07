import ShopBox from '../assets/icons/shape.png';
import Balen from '../assets/icons/balen.png';
import Puma from '../assets/icons/puma.png';
import Nike from '../assets/icons/nike.png';
import ShoeOne from '../assets/images/shoeone.png'

export default function ShopPage() {
    return (
        <div className='flex flex-col sm:flex-row justify-between sm:justify-between sm:mx-20 mb-3 mx-6 sm:m-0 font-headings font-medium'>
            <div>
                <div className='flex justify-start sm:mt-10'>
                    <div className='w-3 h-3 rounded-[0.8px] sm:h-7 sm:w-7 bg-secondary-color sm:rounded-md'><img src={ShopBox} className='sm:h-7 sm:w-7 p-2'></img></div>
                    <p className=' font-medium text-[11.19px] sm:text-xl leading-3 ml-4 sm:mb-2 '>Timbu Cloud Shop</p>
                </div>
                <div>
                    <h1 className='text-[50px] leading-[60px] sm:text-[106px] sm:leading-[129px]'>Timbu Shoe Bank</h1>
                    <p className='text-[11px] leading-[14px] text-[#8B9D98] my-[14px] sm:text-xl sm:leading-6'>Discover our stylish and comfortable shoes, perfect for every occasion and need </p>
                    <div className='flex flex-row justify-around content-center w-[179px] h-[52px] sm:w-[339px] sm:h-20 bg-[#FFFFFF] border-[#D9D9D9] rounded-[50px] border p-[5px]'>
                        <div className='bg-[#D9D9D9] border-[#FFFFFF] rounded-full border w-11 h-11 sm:w-16 sm:h-16'>
                            <img src={Balen}></img>
                        </div>
                        <div className='bg-[#D9D9D9] border-[#FFFFFF] rounded-full border w-11 h-11 -ml-6 sm:w-16 sm:h-16'>
                            <img src={Puma}></img>
                        </div>
                        <div className='bg-[#D9D9D9] border-[#FFFFFF] rounded-full border w-11 h-11 -ml-6 sm:w-16 sm:h-16'>
                            <img src={Nike}></img>
                        </div>
                        <p className='text-[12px] leading-3 sm:text-xl sm:leading-6 flex text-black m-auto'>100+ Brands</p>
                    </div>
                    <button className='w-full h-11 sm:h-20 bg-secondary-color rounded-xl text-white text-[11.19px] leading-3 sm:text-xl sm:leading-6 my-[14px]'>
                        Shop Now
                    </button>
                </div>
            </div>
            <div className='mt-5 sm:mt-10'>
                <div className='w-72 h-72 sm:w-[470px] sm:h-[470px] bg-[#9CD5031A] rounded-full m-auto relative'>
                    <img src={ShoeOne} className='absolute h-[360px] sm:h-[630px] -top-5'></img>
                    <div className='absolute top-12 -left-6 sm:top-28 p-2 rounded-[50px] text-[#586283] border m-auto flex justify-center content-evenly gap-1 bg-white'>
                        <p className='text-[9.5px] sm:text-[17px]'>Strong Fit Shoelaces</p>
                        <div className='w-2 h-2 sm:w-4 sm:h-4 bg-secondary-color rounded-full'></div>
                    </div>
                    <div className='absolute bottom-16 left-9 sm:left-14 p-2 rounded-[50px] text-[#586283] border m-auto flex justify-center content-evenly gap-1 bg-white'>
                        <p className='text-[9.5px] sm:text-[17px]'>Air Flow</p>
                        <div className='w-2 h-2 sm:w-4 sm:h-4 bg-secondary-color rounded-full'></div>
                    </div>
                    <div className='absolute right-[2px] top-20 sm:top-52 p-2 rounded-[50px] text-[#586283] border m-auto flex justify-center content-evenly gap-1 bg-white'>
                        <div className='w-2 h-2 sm:w-4 sm:h-4 bg-secondary-color rounded-full'></div>
                        <p className='text-[9.5px] sm:text-[17px]'>100% Comfy</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};
