import { addProduct } from "redux/slice/cartSlice";
import { ProductType } from "constants/products";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();

  return (
    <div className="justify-center">
      <Link href={`/product/${product.id}`}>
        <a className="cursor-pointer">
          <div className="duration-200 hover:scale-105">
            <Image
              src={product.imgUrl}
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>

          <h4 className="text-black mt-2 md:mt-3">{product.productName}</h4>
          <span className="font-serif inline-block text-black text-[16px] bg-green-300 px-2 rounded-md mt-2 md:mt-3">
            {product.category}
          </span>
        </a>
      </Link>
      <div className="flex justify-between items-center mt-2 md:mt-3">
        <h4 className="text-black font-medium md:font-normal">
          {product.price}
        </h4>
        <button
          onClick={() => {
            dispatch(addProduct(product));
            return toast.success("Product added successfully");
          }}
          className="text-chipo-heading hover:text-chipo-blue"
        >
          <FaPlusCircle className="text-[22px] md:text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Product;
