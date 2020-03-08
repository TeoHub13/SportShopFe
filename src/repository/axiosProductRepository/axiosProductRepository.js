import axios from '../../custom.axios/axios';
const ProductService = {
    loadProducts: ( ) =>{
        return axios.get("/products")
    }   
}
export default ProductService