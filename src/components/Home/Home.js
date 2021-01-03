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
    setImages([]);
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchImages = async () => {
    let response = [];

    try {
      if (searchText.length > 0) {
        response = await Axios.get(
          `/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=8&order_by=latest&query=${searchText}`
        );

        setImages([...images, ...response.data.results]);
      } else {
        response = await Axios.get(
          `/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=8&order_by=latest`
        );
        setImages([...images, ...response.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setImages([]);

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
