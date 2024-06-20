import styled from 'styled-components';
export const StDiv = styled.div``;

export const StContainer = styled.div`
  width: 60%;
  /* height: 50vh; */
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  padding: 2rem;
  box-sizing: border-box;
`;

export const StTitleSection = styled.div`
  height: 60px;
`;
export const StTitleH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  white-space: normal;
  word-wrap: break-word;
`;
export const StRecruitButton = styled.button`
  width: 90px;
  height: 32px;
  color: ${(props) => (props.$is_recruit ? '#12B886' : '#f2b564')};
  background-color: #fcfdff;
  border-radius: 1rem;
  border: 2px solid;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StSubSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin-top: 40px;
  font-size: 1rem;
  font-weight: 700;
`;

export const StButtonDiv = styled.div`
  display: ${(props) => (props.$postEditAuthority ? 'flex' : 'none')};
  gap: 20px;
  & button {
    width: 5.3rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: #2d2d2d;
    color: #fcfdff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const StContentSection = styled.div`
  margin-top: 40px;
  min-height: 40vh;
  & p {
    padding: 20px 0 20px 0;
    word-wrap: break-word;
  }
  img {
    width: 100%;
  }
`;

export const StPostImage = styled.img`
  max-width: 24rem;
`;

export const StHr = styled.hr`
  border: 1px solid #b4b4b4;
`;
