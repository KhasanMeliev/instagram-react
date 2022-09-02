import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  background-color: #191919;
`;

export const Stories = styled.div`
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
  background-color: white;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 12px;
    color: #191919;
  }
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid white;
`;

export const Posts = styled.div`
  width: 100%;
  margin-top: 10px;
  border-top: 2px solid grey;
  padding: 10px 0px;
`;
export const Post = styled.div`
  width: 100%;
  height: 500px;
  color: white;
`;

export const Name = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
  div {
    display: flex;
    gap: 10px;
    div {
      display: flex;
      flex-direction: column;
      gap: 0px;
      h3 {
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
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
  box-sizing: border-box;

  h3 {
    font-size: 17px;
    margin-top: 0px;
    margin-left: 10px;
  }
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

export const Likes = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  p {
    margin-left: 40px;
  }
`;

export const Images = styled.div`
  img {
    width: 28px;
    border-radius: 50%;

    &:nth-child(2) {
      position: absolute;
      margin-left: -12px;
    }
    &:nth-child(3) {
      position: absolute;
      margin-left: 3px;
    }
  }
`;
