import TableCustom from "components/common/TableCustom";
import AddProductForm from "components/page/admin/AddProductForm";
import Axios from "config/Axios";
import { ModalContextProvider } from "context/ModelContext";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Admin = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get("/newsletter");
      setEmails(res.data);
    };

    getData();
  }, []);

  return (
    <ModalContextProvider>
      <div className="bg-gray-900">
        <Head>
          <title>ChiPoPo</title>
          <meta name="description" content="I'm Front-end developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pt-36 pb-20 wrap-content">
          <AddProductForm />
          <div className="mt-10">
            <TableCustom
              title="Product List"
              data={emails}
              titleRow={titleEmailRow}
            />
          </div>
        </div>
      </div>
    </ModalContextProvider>
  );
};

export default Admin;

// export const getServerSideProps = async () => {
//   const res = await Axios.get("/newsletter");
//   return { props: { emails: res.data } };
// };

const titleEmailRow = [
  { title: "ID", field: "_id" },
  { title: "createdAt", field: "createdAt" },
  { title: "Email", field: "email" },
  {
    title: "Action",
    field: ({ _id }: { _id: string }) => {
      return (
        <div className="flex justify-around gap-4">
          <button>
            <FaEdit size={24} color="rgb(34,197,94)" />
          </button>
          <button>
            <FaRegTrashAlt size={24} color="rgb(244,63,94)" />
          </button>
        </div>
      );
    },
  },
];
