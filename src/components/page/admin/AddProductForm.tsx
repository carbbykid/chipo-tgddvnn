import { useModalContext } from "context/ModelContext";
import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";

const AddProductForm = () => {
  const { showModal } = useModalContext();
  const hadleAddProduct = () => {
    console.log("onSubmit button add product");
  };

  return (
    <div className="py-5 border-b-2">
      <button
        onClick={() =>
          showModal({
            title: "Please confirm your request!",
            onOk: () => {
              console.log("Tui đã nhấn OKeee");
            },
          })
        }
        className="px-4 items-center py-2 flex rounded-md border text-white bg-indigo-500 hover:bg-slate-900"
      >
        Add Product
        <span className="px-1">
          <FaMobileAlt size={16} />
        </span>
      </button>

      <form onSubmit={hadleAddProduct}></form>
    </div>
  );
};

export default AddProductForm;
