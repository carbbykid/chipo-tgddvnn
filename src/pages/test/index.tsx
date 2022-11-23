import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

const Test: NextPage = () => {
  const [value1, setValue1] = useState<string>();
  const [value2, setValue2] = useState<string>();
  const [value3, setValue3] = useState<string>();

  /* Callback */

  //   const httpGetAsync = (
  //     theUrl: string,
  //     callback: (value: XMLHttpRequest) => void,
  //   ) => {
  //     const xmlHttp = new XMLHttpRequest();
  //     xmlHttp.onreadystatechange = () => {
  //       if (xmlHttp.readyState == 4 && xmlHttp.status === 200) callback(xmlHttp);
  //     };
  //     xmlHttp.open("GET", theUrl, true);
  //     xmlHttp.send(null);
  //   };

  //   useEffect(() => {
  //     httpGetAsync("https://picsum.photos/200/300", (value: XMLHttpRequest) => {
  //       setValue1(value.responseURL);

  //       httpGetAsync("https://picsum.photos/200/300", (value: XMLHttpRequest) => {
  //         setValue2(value.responseURL);

  //         httpGetAsync(
  //           "https://picsum.photos/200/300",
  //           (value: XMLHttpRequest) => {
  //             setValue3(value.responseURL);
  //           },
  //         );
  //       });
  //     });

  //     currentPromise
  //       .then((data) => console.log("data:", data))
  //       .catch((error) => console.log("error:", error));
  //   }, []);

  //   const currentPromise = new Promise((resolve, reject) => {
  //     const condition = true;
  //     if (condition) {
  //       setTimeout(() => {
  //         resolve("success");
  //       }, 3000);
  //     }
  //     reject("Error");
  //   });

  const httpGetAsync = (
    theUrl: string,
    resolve: (value: XMLHttpRequest) => void,
  ) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status === 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  };

  const currentPromise = new Promise(
    (resolve: (value: XMLHttpRequest) => void, reject) => {
      httpGetAsync("https://picsum.photos/200/300", resolve);
    },
  );
  const currentPromise2 = new Promise(
    (resolve: (value: XMLHttpRequest) => void, reject) => {
      httpGetAsync("https://picsum.photos/200/300", resolve);
    },
  );
  const currentPromise3 = new Promise(
    (resolve: (value: XMLHttpRequest) => void, reject) => {
      httpGetAsync("https://picsum.photos/200/300", resolve);
    },
  );

  //   function createPromise(url: string) {
  //     const currentPromise = new Promise(
  //       (resolve: (value: XMLHttpRequest) => void, reject) => {
  //         httpGetAsync(url, resolve);
  //       },
  //     );
  //     return currentPromise;
  //   }

  //   useEffect(() => {
  //     createPromise("https://picsum.photos/200/300")
  //       .then((data: XMLHttpRequest) => {
  //         setValue1(data.responseURL);
  //         return createPromise("https://picsum.photos/200/300");
  //       })
  //       .then((data) => {
  //         setValue2(data.responseURL);
  //         return createPromise("https://picsum.photos/200/300");
  //       })
  //       .then((data) => setValue3(data.responseURL));
  //   }, []);

  useEffect(() => {
    currentPromise
      .then((data: XMLHttpRequest) => {
        setValue1(data.responseURL);
        return currentPromise2;
      })
      .then((data) => {
        setValue2(data.responseURL);
        return currentPromise3;
      })
      .then((data) => setValue3(data.responseURL));
  }, []);

  return (
    <div>
      <div className="mt-[100px] flex">
        <img src={value1} alt="chipo" />
        <img src={value2} alt="chipo" />
        <img src={value3} alt="chipo" />
      </div>
    </div>
  );
};

export default Test;
