import banner from '../../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero h-[450px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="flex justify-between pr-10 text-center text-white hero-content">
                <div></div>
                <div className="z-10 flex flex-col items-center space-y-8">
                    <h1 className="text-2xl font-bold text-white uppercase md:text-5xl">Discover Innovation at Your Fingertips</h1>
                    <h1 className='className="mb-10 text-2xl font-bold text-white uppercase md:text-5xl'>WITH</h1>
                    <h1 className="text-4xl font-bold text-[#0F1BB2] uppercase md:text-7xl">TECH WORLD</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;