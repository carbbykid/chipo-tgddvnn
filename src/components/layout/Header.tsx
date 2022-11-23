import { selectAllQuantityProducts } from "redux/slice/cartSlice";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = (): JSX.Element => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const allQuantity = useSelector(selectAllQuantityProducts);

  const handleNav = () => {
    setNav(!nav);
  };

  useLayoutEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    // return window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-200 font-["rubikdirt"] ${
        isScroll
          ? "bg-white shadow-md text-chipo-heading"
          : "text-white bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1240px]  m-auto flex gap-3 md:gap-5 justify-between items-center ease-in  ${
          isScroll ? "p-4" : "p-4 md:p-4 md:py-6"
        }`}
      >
        <Link href="/">
          <h1
            className={`font-bold text-xl cursor-pointer ease-in hover:text-chipo-heading duration-200 hover:scale-105 ${
              isScroll ? "md:text-3xl" : "md:text-4xl"
            }`}
          >
            ChiPoPo
          </h1>
        </Link>

        <ul className="hidden md:flex md:flex-1 justify-center font-['rubikdirt'] ease-in">
          <li className="px-4 py-2 hover:text-chipo-heading hover:scale-105 ease-in duration-200 ">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:text-chipo-heading hover:scale-105 ease-in duration-200">
            <Link href="/#product">Product</Link>
          </li>
          <li className="px-4 py-2 hover:text-chipo-heading hover:scale-105 ease-in duration-200">
            <Link href="/#collection">Collection</Link>
          </li>
          <li className="px-4 py-2 hover:text-chipo-heading hover:scale-105 ease-in duration-200">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        <div className="text-[25px] flex gap-3 md:gap-5 items-center duration-200 justify-center font-sans">
          <Link href="/shop">
            <div className="px-2 py-1 text-[16px] md:px-4 md:py-2 font-['rubikdirt']  mr-2 md:mr-5 md:text-[16px] hover:text-white  hover:scale-105 hover:bg-chipo-orange ease-in rounded-lg border-2 cursor-pointer">
              Shop
            </div>
          </Link>
          <span className="hover:scale-105 cursor-pointer relative">
            <FaHeart />
            <span className="w-[22px] h-[22px] text-[12px] font-semibold rounded-full bg-chipo-blue text-white absolute -top-3 -right-3 flex justify-center items-center">
              2
            </span>
          </span>
          <Link href="/cart">
            <span className="hover:scale-105  cursor-pointer relative">
              <FaShoppingBag />
              <span className="w-[22px] h-[22px] text-[12px] font-semibold rounded-full bg-chipo-blue text-white absolute -top-3 -right-3 flex justify-center items-center">
                {allQuantity}
              </span>
            </span>
          </Link>
        </div>

        <div className="w[35px] h-[35px] md:w-[40px] md:h-[40px] cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/duv7awivc/image/upload/v1667960253/shop/user-icon_kwv2lm.png"
            alt="chipo"
          />
        </div>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden cursor-pointer z-10"
        >
          {nav ? (
            <AiOutlineClose
              size={20}
              className={`${isScroll ? "text-chipo-heading" : "white"}`}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              className={`${isScroll ? "text-chipo-heading" : "white"}`}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-chipo-text text-center ease-in duration-300 ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#product">Product</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#collection">Collection</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
