import Banner from "./banner/Banner";
import ChooseUs from "./choose_us/ChooseUs";
import Choosing from "./choosing/Choosing";
import Product from "./product/Product";
import JoinUs from "./join/JoinUs"
import TopBrands from "./Brands/TopBrands";

const HomePage = () => {
    return (
        <div className="space-y-8">
            <Banner />
            <Product />
            <Choosing />
            <ChooseUs />
            <JoinUs />
            <TopBrands />
        </div>
    );
};

export default HomePage;