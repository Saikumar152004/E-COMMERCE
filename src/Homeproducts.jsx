import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./redux/Action";
import { Link } from 'react-router-dom';
function Homeproducts() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.Reducer.posts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div className="container">

    <div className="row">
    {productData?.products?.slice(0, 3).map((e) => (
        <div className="col-md-4 mb-4"> 
        <div className="card p-3">
        <img className="product-img" src={e.images} />
        <h4> {e.title}</h4>
        </div>
        </div>
    ))}
    </div>
    <div className="text-center">
         <Link to="/Products">  
                 <button className='btn btn-success'> Go Products </button>
                 </Link>
    </div>
  </div>;
}

export default Homeproducts;
