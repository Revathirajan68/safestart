import CCard from "../components/hoc/card";
import { ProductsList } from "../assets/json/formjson";

import './style.scss'

const Products = () => {
    const productsList = ProductsList

    return (
        <div className="products-section">
            <h1 className="section-title">Products</h1>
          <div className="products-list">
          {productsList?.map((item, index) => {
                const {brandName, description, price, src} = item;
                return (
                    <CCard image={src} title={brandName} text={description} price={price} />
                )
            })}
          </div>

        </div>
    )
}
export default Products;