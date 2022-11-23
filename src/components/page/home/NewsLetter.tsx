import Axios from "config/Axios";
import { useState } from "react";
import { FaChevronRight, FaLock } from "react-icons/fa";

const NewsLetter = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Axios.post("/newsletter", {
      email: email,
      createdAt: new Date().toString(),
    });
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-chipo-bg-second pt-14 pb-24 md:pb-[160px] md:pt-[110px]">
      <div className="wrap-content">
        <div className="mb-16 md:mb-[50px]">
          <h2 className="text-2xl  font-bold tracking-tighter mb-[20px] md:text-5xl text-center text-chipo-heading">
            {heading}
          </h2>
          <div className="message mb-[20px]">{message}</div>
          <hr className="divider" />
        </div>

        <div className="text-center">
          <form onSubmit={handleSubmit} className="max-w-[750px] m-auto">
            <div className="flex">
              <input
                type="email"
                className="text-[16px] md:text-[19px] leading-[60px] md:leading-[80px] px-6 pd:px-[38px] w-full bg-white"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={handleEmail}
              />
              <button
                className="bg-chipo-blue py-2 px-5 md:py-[10px] md:px-[40px] hover:bg-chipo-text ease-in duration-200"
                type="submit"
              >
                <FaChevronRight className="text-xl md:text-[30px] text-white" />
              </button>
            </div>
          </form>
          <div className="mt-[22px]">
            <div className="md:flex items-center justify-center">
              <FaLock className="m-auto mb-2 md:m-0 md:inline md:mr-[8px]" />
              No Spam. We Promise. Unsubscribe anytime.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
