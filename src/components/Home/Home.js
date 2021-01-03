import React, { useEffect, useState } from "react";
import Axios from "../axios/Axios";
import ImageComponent from "../Image/ImageComponent";
import { ImageWrapper, ImageInputForm, Input, SubmitBtn } from "./HomeElements";
import { SRLWrapper } from "simple-react-lightbox";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("query", "");
    fetchImages();
  }, []);

  const fetchImages = async () => {
    console.log(localStorage.getItem("query"));
    try {
      const response = await Axios.get(
        `/photos/random/?client_id=${
          process.env.REACT_APP_ACCESS_KEY
        }&count=8&order_by=latest&query=${localStorage.getItem("query")}`
      );

      console.log(response.data);
      setImages([...images, ...response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImages([]);
    localStorage.setItem("query", searchText);
    fetchImages();
  };

  return (
    <>
      <ImageInputForm onSubmit={handleSubmit}>
        <Input
          placeholder="Search Here..."
          onChange={(e) => setSearchText(e.target.value)}
        ></Input>
        <SubmitBtn>Search</SubmitBtn>
      </ImageInputForm>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <SRLWrapper>
          <ImageWrapper>
            {images.map((_img) => (
              <ImageComponent
                url={_img.urls.regular}
                key={images.id}
                caption={_img.alt_description}
              />
            ))}
          </ImageWrapper>
        </SRLWrapper>
      </InfiniteScroll>
    </>
  );
};

export default Home;
