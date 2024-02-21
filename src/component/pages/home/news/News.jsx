import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const News = () => {
    const axiosPublic = useAxiosPublic();
    const { data: news = [] } = useQuery({
        queryKey: ['news.id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/news');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })


    if (!news.length) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mt-10 mb-5">News Feed</h1>
            <div>
                <Swiper
                    effect={'coverflow'}
                    slidesPerView={2}
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
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        news.map(div => <SwiperSlide key={div._id}>
                            <div className="card card-compact w-11/12 h-72 ml-8 border-2 border-solid bg-base-100 shadow-xl">
                                <div className="card-body bg-base-200">
                                    <h2 className="card-title text-2xl">{div.title}</h2>
                                    <h2>Published by {div.author}</h2>
                                    <p>{div.publication_date}</p>
                                    <p>{div.content}</p>
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

export default News;