import React, { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import "./Feed.css";
import VideoList from "../containers/VideoList";
import useApi from "../utils/useApi";

import SkeletonVideoList from "../components/Placeholders/SkeletonVideoList";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [data, setSearchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: searchData, isLoading, isError } = await useApi(`search?q=${searchTerm}&region=IN`, searchTerm);
      //console.log(searchData);
      setSearchData(searchData);
      setIsLoading(isLoading);
      setIsError(isError);
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
    }
  };

  fetchData();
  
  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div className=" bg-black h-screen overflow-scroll scrollbar-hide">
        <div className="rounded-2xl pt-16 lg:ml-4  overflow-hidden">
          <div className="p-2 ml-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
              className=" text-base font-medium "
            >
              Search results for{" "}
              <span className=" text-red-500 "> {searchTerm}</span>
            </motion.p>
          </div>
          <SkeletonVideoList />
        </div>
      </div>
    );

  //console.log("SearchFeed", data);
  if (data) {
    return (
      <div className="">
        <div className="rounded-tl-[2rem] pt-8 bg-black max-h-screen overflow-scroll scrollbar-hide scroll-pb-16">
          <div className="p-2 lg:ml-8 sm:ml-5 md:-mb-6 mt-4">
            <p className=" text-base font-medium ">
              Search results for{" "}
              <span className=" text-red-500 "> {searchTerm}</span>
            </p>
          </div>
          <div className="flex flex-wrap p-2 overflow-scroll scrollbar-hide">
            <VideoList data={data} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" h-screen bg-black
      
    "
      ></div>
    );
  }
};

export default SearchFeed;
