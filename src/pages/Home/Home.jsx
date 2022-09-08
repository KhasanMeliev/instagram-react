import React from "react";
import {
  Comments,
  Description,
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
  PostDate,
  PostImage,
  Posts,
  Stories,
  ViewComments,
} from "./Home.style";
import { FaPlus, FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { VscSave } from "react-icons/vsc";
import posts from "../../mocks/posts";
import stories from "../../mocks/stories";

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
        {stories.map((story) => (
          <>
            <Image src={story.picture} alt="story" />
            
          </>
        ))}
      </Stories>

      <Posts>
        {posts.map((post) => (
          <Post>
            <Name>
              <div>
                <img src={post.profile_pic} />
                <div>
                  <h3>{post.profile_name}</h3>
                  <p>{post.location}</p>
                </div>
              </div>
              <BsThreeDots />
            </Name>
            <PostImage src={post.post_pic} alt="postPicture" />
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
                  <img src={post.post_pic} alt="postPicture" />
                </Images>
                <p>
                  liked by <span>coding_khasan</span> and {post.likes} others
                </p>
              </Likes>
              <Description>
                <span>{post.profile_name}</span> {post.description}
              </Description>
              <ViewComments></ViewComments>
              <PostDate>{post.post_date}</PostDate>
            </Comments>
          </Post>
        ))}
      </Posts>
    </HomeWrapper>
  );
};

export default Home;
