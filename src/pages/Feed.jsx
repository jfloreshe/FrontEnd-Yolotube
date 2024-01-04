import React, { useRef, useState, useEffect } from "react";

import VideoCard from "../components/VideoCard";
import "./Feed.css";

import useApi from "../utils/useApi";
import SkeletonVideoCard from "../components/Placeholders/SkeletonVideoCard";

const Feed = () => {
  //console.log(location.pathname + "lcoation");
  // const { data, isLoading, isError } = useApi("trending?maxResults=10");
  const [data, setSearchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  
  const fetchData = async () => {
    try {
      const { data: searchData, isLoading, isError } = await useApi();
      setSearchData(searchData);
      setIsLoading(isLoading);
      setIsError(isError);
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
    }
  };
  fetchData();
  
  //console.log("DATA", data);
  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div className=" bg-black h-screen overflow-scroll scrollbar-hide lg:rounded-l-[2rem] ">
        <div className="rounded-2xl mt-16 md:ml-4 lg:px-2 overflow-hidden">
          <div className="flex flex-wrap lg:ml-1 md:px-2 ">
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
          </div>
        </div>
      </div>
    );

  return (
    <div className="scrollbar-hide bg-black lg:rounded-l-[2rem] overflow-scroll h-screen">
      <div className="rounded-2xl  pt-12   lg:px-2">
        {data ? (
          <div className="flex flex-wrap lg:ml-1 md:px-2 ">
            {data.map((item) => {
              return (
                // item.lengthSeconds > 60 && (
                  // <VideoCard
                  //   key={item.videoId}
                  //   videoId={item.videoId}
                  //   title={item.title}
                  //   channelTitle={item.author}
                  //   channelId={item.authorId}
                  //   viewCount={item.viewCount}
                  //   publishText={item.publishedText}
                  //   lengthText={item.lengthSeconds}
                  //   thumbnail={item.videoThumbnails[4].url}
                  //   // channelThumbnail={item.channelThumbnail[0].url}
                  // />
                  <VideoCard
                  key={item.videoId}
                  videoId={item.videoId}
                  videourl={item.video_url}
                  // title={item.title ?? "Video"}
                  title={item.tag}
                  // channelTitle={item.author}
                  channelTitle="yolotube"
                  // channelId={item.authorId}
                  channelId={"Yolotube"}
                  // viewCount={item.viewCount}
                  viewCount="20"
                  // publishText={item.publishedText}
                  // lengthText={item.lengthSeconds}
                  publishText=""
                  lengthText=""
                  // thumbnail={item.videoThumbnails && item.videoThumbnails[3].url}
                  thumbnail={item.thumbnail_url}
                  // channelThumbnail={item.channelThumbnail[0].url}
                />
                // )
              );
            })}
          </div>
        ) : (
          <div className=" text-white">Loading</div>
        )}
      </div>
    </div>
  );
};

export default Feed;
