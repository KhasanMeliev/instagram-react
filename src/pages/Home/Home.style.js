import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  background-color: #191919;

  @media (min-width: 350px) {
    width: 420px;
  }
`;

export const Stories = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  overflow: scroll;
  gap: 10px;
  padding: 0px 5px;
`;
export const MyStory = styled.div`
  position: relative;
`;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Post = styled.div`
  width: 100%;
  height: 500px;
  color: white;
`;

export const Name = styled.div`
  width: 100%;
  height: 11%;
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
        font-size: 16px;
        font-weight: 450;
      }
      p {
        margin: 0;
        font-size: 13px;
      }
    }
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  svg {
    font-size: 20px;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 60%;
`;

export const Comments = styled.div`
  width: 100%;
  height: 23%;
  box-sizing: border-box;
  padding: 0 10px;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  box-sizing: border-box;
`;

export const LikeCommentSend = styled.div`
  display: flex;
  gap: 5px;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  p {
    margin: 0;
    font-size: 16px;
    margin-left: 10px;
    color: rgb(208, 212, 219);
    span {
      color: white;
      font-weight: 400;
    }
  }
`;

export const Images = styled.div`
  img {
    width: 23px;
    border-radius: 50%;
  }
`;

export const Description = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  word-spacing: 0.1;
  margin-top: 5px;
  span {
    font-weight: 500;
  }
`;

export const ViewComments = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 450;
`;

export const PostDate = styled.p`
  font-size: 14px;
  font-weight: 450;
  margin: 0;
  margin-top: 5px;
`;
