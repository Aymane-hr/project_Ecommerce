import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ height: "350px" }}>
        <div className="text-center" style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ fontSize: "16px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
            {product.title}
          </h5>
          <p className="card-text">${product.price}</p>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
