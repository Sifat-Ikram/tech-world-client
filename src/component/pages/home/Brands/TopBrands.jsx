import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const TopBrands = () => {
    const axiosPublic = useAxiosPublic();
    const { data: brands = [] } = useQuery({
        queryKey: ['brands.id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/brand');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })


    if (!brands.length) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-10 text-center">Our brand Partners</h1>
            <div>
                <Swiper
                    effect={'coverflow'}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        brands.map(div => <div key={div._id}>
                            <SwiperSlide>
                                <div style={{
                                    backgroundImage: `url(${div.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}>
                                    <div className="hero-overlay bg-opacity-50 w-full"></div>
                                    <div className="pl-5 pb-4">
                                        <div className="pt-32 w-1/3">
                                            <h1 className="text-xl left-2 text-white font-bold">{div.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TopBrands;