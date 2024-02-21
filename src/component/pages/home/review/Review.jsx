import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Review = () => {
    const axiosPublic = useAxiosPublic();
    const { data: review = [] } = useQuery({
        queryKey: ['review.id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })


    if (!review.length) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-10 text-center">Customers Review</h1>
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
                    modules={[Pagination, Autoplay]}
                    className="mySwiper gap-3"
                >
                    {
                        review.map(div => <SwiperSlide key={div._id}>
                            <div className="card card-compact w-11/12 h-60 border-2 border-solid bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{div.name}</h2>
                                    <h2>Date: {div.date}</h2>
                                    <p>{div.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;