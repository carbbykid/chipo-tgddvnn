import FormInput from "components/common/FormInput";
import Axios from "config/Axios";
import { useState } from "react";
import {
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

type Contact = {
  formTitle: string;
  address: string;
  firstPhoneNumber: string;
  secondPhoneNumber?: string;
  email: string;
};

export type FormValue = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type nameType = keyof FormValue;

const initForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = ({
  formTitle,
  address,
  firstPhoneNumber,
  secondPhoneNumber,
  email,
}: Contact): JSX.Element => {
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [formContact, setFormContact] = useState<FormValue>(initForm);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Axios.post("/contact", {
      email: email,
      createdAt: new Date().toString(),
    });
  };

  const handleFormContact = (e: any) => {
    setFormContact((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      id="contact"
      className="h-[600px] md:h-[800px] relative bg-contact-bg bg-cover pb-14 pt-14 md:pb-[160px] md:pt-[110px] before:content-[''] before:absolute before:backdrop-blur-sm before:w-full before:h-full before:top-0 before:left-0"
    >
      <div className="flip-card">
        <div
          className={`flip-card-inner ${
            isDisplayForm ? "flip-card-rotate" : ""
          }`}
        >
          {/* front */}
          <div className="form-contact-wrap flip-card-front">
            <h2 className="font-bold text-xl tracking-tighter md:text-[27px] text-chipo-heading">
              {formTitle}
            </h2>
            <div className="pt-[25px] pb-[30px] leading-[26px] text-[16px]">
              <div className="flex items-center">
                <FaMapMarkerAlt className="inline mr-[4px]" />
                {address}
              </div>
              <div className="py-[10px] flex">
                <FaPhoneAlt className="inline mr-[4px]" />
                <div>
                  {firstPhoneNumber} {secondPhoneNumber && <br />}
                  {secondPhoneNumber}
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="inline mr-[4px]" />
                {email}
              </div>
            </div>
            <button
              onClick={() => setIsDisplayForm((prev) => !prev)}
              className="md:text-[19px] px-[33px] w-full leading-[50px] md:leading-[63px] font-semibold text-white bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading"
            >
              CONTACT US
            </button>
          </div>

          {/* back */}
          <div className="form-contact-wrap flip-card-back">
            <form onSubmit={handleSubmit}>
              {inputs.map((input, idx) => (
                <FormInput
                  key={idx}
                  {...input}
                  value={formContact[input.name as "name"]}
                  onChange={handleFormContact}
                  className="w-full text-[14px] md:text-[17px] leading-[24px] px-[18px] py-3 md:py-[12px] font-light mb-5 md:mb-[34px] border border-['#e0e8ee'] text-['#555'] bg-chipo-bg-second rounded-[4px]"
                />
              ))}

              <button
                className="md:text-[19px] md:px-[33px] w-full leading-[50px] md:leading-[63px] font-semibold text-white bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </form>
            <FaTimes
              className="absolute top-0 right-0 text-[18px] mx-[10px] my-[10px] hover:text-chipo-text cursor-pointer"
              onClick={() => setIsDisplayForm((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      {/* <div className="wrap-content w-full h-full flip-card">
        <div className="relative w-full h-full flip-card-inner"> */}
      {/* front */}
      {/* <div className="form-contact-wrap back-face">
            <h2 className="font-bold tracking-tighter sm:text-[27px] text-chipo-heading">
              {formTitle}
            </h2>
            <div className="pt-[25px] pb-[30px] leading-[26px] text-[16px]">
              <div className="flex items-center">
                <FaMapMarkerAlt className="inline mr-[4px]" />
                {address}
              </div>
              <div className="py-[10px] flex">
                <FaPhoneAlt className="inline mr-[4px]" />
                <div>
                  {firstPhoneNumber} {secondPhoneNumber && <br />}
                  {secondPhoneNumber}
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="inline mr-[4px]" />
                {email}
              </div>
            </div>
            <button
              onClick={() => setIsDisplayForm((prev) => !prev)}
              className="sm:text-[19px] px-[33px] w-full leading-[63px] font-semibold text-white bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading"
            >
              CONTACT US
            </button>
          </div> */}

      {/* back */}
      {/* <div className="form-contact-wrap flip-card-back back-face">
        <form onSubmit={handleSubmit}>
          {inputs.map((input, idx) => (
            <FormInput
              key={idx}
              {...input}
              value={formContact[input.name as nameType]}
              onChange={handleFormContact}
              className="w-full text-[17px] leading-[24px] px-[18px] py-[12px] font-light mb-[34px] border border-['#e0e8ee'] text-['#555'] bg-chipo-bg-second rounded-[4px]"
            />
          ))}

          <button
            onClick={() => setIsDisplayForm((prev) => !prev)}
            className="sm:text-[19px] px-[33px] w-full leading-[63px] font-semibold text-white bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div> */}
      {/* </div>
      </div> */}
    </div>
  );
};

export default Contact;

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "message",
    type: "text",
    placeholder: "Message",
    required: true,
    types: "textarea",
    errorMessage: "This field is required.",
  },
];
