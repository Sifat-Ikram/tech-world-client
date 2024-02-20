import Banner from "./banner/Banner";
import Product from "./product/Product";


const HomePage = () => {
    return (
        <div className="space-y-8">
            <Banner />
            <Product />
        </div>
    );
};

export default HomePage;