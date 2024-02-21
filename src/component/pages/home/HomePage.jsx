import Banner from "./banner/Banner";
import ChooseUs from "./choose_us/ChooseUs";
import Choosing from "./choosing/Choosing";
import Product from "./product/Product";


const HomePage = () => {
    return (
        <div className="space-y-8">
            <Banner />
            <Product />
            <Choosing />
            <ChooseUs />
        </div>
    );
};

export default HomePage;