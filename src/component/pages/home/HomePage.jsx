import Banner from "./banner/Banner";
import ChooseUs from "./choose_us/ChooseUs";
import Choosing from "./choosing/Choosing";
import Product from "./product/Product";
import JoinUs from "./join/JoinUs"
import TopBrands from "./Brands/TopBrands";
import Review from "./review/Review";
import News from "./news/News";

const HomePage = () => {
    return (
        <div className="space-y-8">
            <Banner />
            <Product />
            <TopBrands />
            <Choosing />
            <ChooseUs />
            <JoinUs />
            <Review />
            <News />
        </div>
    );
};

export default HomePage;