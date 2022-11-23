import TableCustom from "components/common/TableCustom";
import Axios from "config/Axios";
import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // {
  //   emails,
  // }: InferGetStaticPropsType<typeof getServerSideProps>
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get("/newsletter");
      setEmails(res.data);
    };

    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-[100px] bg-chipo-gray-blur h-screen">
        <TableCustom data={emails} titleRow={titleEmailRow} />
      </div>
    </div>
  );
};

export default Dashboard;

// export const getServerSideProps = async () => {
//   const res = await Axios.get("/newsletter");
//   return { props: { emails: res.data } };
// };

const mockData: any = [
  {
    no: 10001,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10002,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10003,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10004,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10005,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10006,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10007,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
];

// const titleRow = [
//   { title: "No", field: "no" },
//   { title: "Detail", field: "detail" },
//   { title: "Status", field: "status" },
//   { title: "Date", field: "date" },
//   { title: "Total", field: "total" },
// ];

const titleEmailRow = [
  { title: "ID", field: "_id" },
  { title: "createdAt", field: "createdAt" },
  { title: "Email", field: "email" },
];
