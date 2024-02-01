import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const navigate = useNavigate(); 
  const { id } = useParams();
  // console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductByID(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setProduct({ ...product, [event.target.name]: value });
  };

  const ProductUpdate = (event) => {
    event.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Edit Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(event) => ProductUpdate(event)}>
                  <div className="mb-3">
                    <label>Edit Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(event) => handleChange(event)}
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Edit Product Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(event) => handleChange(event)}
                      value={product.description}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Edit Product Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(event) => handleChange(event)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Edit Product Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(event) => handleChange(event)}
                      value={product.status}
                    />
                  </div>

                  <button className="btn btn-primary col-md-12 mt-2">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
