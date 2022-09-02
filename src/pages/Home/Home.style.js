import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const Stories = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  overflow: scroll;
  gap: 10px;
  padding: 0px 5px;
`;
export const MyStory = styled.div``;
export const MyStoryBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border: none;
  }

  svg {
    font-size: 12px;
    color: white;
  }
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid grey;
`;

export const Posts = styled.div`
  width: 100%;
  height: 600px;
  background: yellow;
  margin-top: 10px;
  border-top: 2px solid grey;
`;
export const Post = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
`;

export const Name = styled.div`
  width: 100%;
  height: 12%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;

  div {
    display: flex;
    gap: 10px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  svg {
    font-size: 20px;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 65%;
`;

export const Comments = styled.div`
  width: 100%;
  height: 23%;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  font-size: 30px;
  box-sizing: border-box;
`;

export const LikeCommentSend = styled.div`
  display: flex;
  gap: 5px;
`;
