import useSWR from "swr";
import React from "react";

import { apidb } from "../utils/apiFirestore";
import { collection, getDocs } from 'firebase/firestore/lite';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default async function useApi(id="",query="") {
  const { data, error, isLoading } = useSWR(
    `https://iv.nboeck.de/api/v1/${id}`,
    fetcher
  );

  const data_yolotube = collection(apidb, 'data-yolotube');
  const dataSnapshot = await getDocs(data_yolotube);
  const dataList = dataSnapshot.docs.map(doc => doc.data());

  //console.log("desde useApi dataList", dataList);

  if (query == "") {
    return {
      data: dataList,
      isLoading,
      isError: error,
    };
  }
  const regex = new RegExp(query, "i");

  const results = [];
  let cont = 1
  for (const data_ of dataList) {
    if (regex.test(data_.tag)) {
      results.push(data_);
      cont++;
    }
  }
  //console.log("desde useApi", results);
  return {
    data: results,
    isLoading,
    isError: error,
  };
}
