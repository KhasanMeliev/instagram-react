import React from "react";
import {
  Comments,
  HomeWrapper,
  Icons,
  Image,
  Images,
  LikeCommentSend,
  Likes,
  MyStory,
  MyStoryBox,
  Name,
  Post,
  PostImage,
  Posts,
  Stories,
} from "./Home.style";
import { FaPlus, FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { VscSave } from "react-icons/vsc";
const Home = () => {
  return (
    <HomeWrapper>
      <Stories>
        <MyStory>
          <Image
            src="https://avatars.githubusercontent.com/khasanmeliev"
            alt="story"
          />
          <MyStoryBox>
            <FaPlus />
          </MyStoryBox>
        </MyStory>

        <Image
          src="https://avatars.githubusercontent.com/khasanmeliev"
          alt="story"
        />
        <Image
          src="https://avatars.githubusercontent.com/khasanmeliev"
          alt="story"
        />
        <Image
          src="https://avatars.githubusercontent.com/khasanmeliev"
          alt="story"
        />
        <Image
          src="https://avatars.githubusercontent.com/khasanmeliev"
          alt="story"
        />
        <Image
          src="https://avatars.githubusercontent.com/khasanmeliev"
          alt="story"
        />
        <Image
          src="https://avatars.githubusercontent.com/khasanmeliev"
          alt="story"
        />
      </Stories>

      <Posts>
        <Post>
          <Name>
            <div>
              <img src="https://avatars.githubusercontent.com/khasanmeliev" />
              <div>
                <h3>coding_khasan</h3>
                <p>Istanbul</p>
              </div>
            </div>
            <BsThreeDots />
          </Name>
          <PostImage
            src="https://avatars.githubusercontent.com/khasanmeliev"
            alt="postPicture"
          />
          <Comments>
            <Icons>
              <LikeCommentSend>
                <AiOutlineHeart />
                <FaRegComment />
                <FiSend />
              </LikeCommentSend>
              <VscSave />
            </Icons>
            <Likes>
              <Images>
                <img
                  src="https://avatars.githubusercontent.com/khasanmeliev"
                  alt="postPicture"
                />
                <img
                  src="data:image/jpeg;base64,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"
                  alt="postPicture"
                />
                <img
                  src="https://avatars.githubusercontent.com/khasanmeliev"
                  alt="postPicture"
                />
              </Images>
              <p>Liked by kenzoere and others</p>
            </Likes>
            <h3>November 12</h3>
          </Comments>
        </Post>
      </Posts>
    </HomeWrapper>
  );
};

export default Home;
