import React from "react";
import { FaMobileAlt } from "react-icons/fa";

const AddProductForm = () => {
  return (
    <div className="py-5 border-b-2">
      <button className="px-4 items-center py-2 flex rounded-md border text-white bg-indigo-500 hover:bg-slate-900">
        Add Product
        <span className="px-1">
          <FaMobileAlt size={16} />
        </span>
      </button>

      <form action=""></form>
    </div>
  );
};

export default AddProductForm;
