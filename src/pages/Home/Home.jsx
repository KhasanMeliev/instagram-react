import React from "react";
import {
  Comments,
  HomeWrapper,
  Icons,
  Image,
  LikeCommentSend,
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
              <p>coding_khasan</p>
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
            
          </Comments>
        </Post>
      </Posts>
    </HomeWrapper>
  );
};

export default Home;
