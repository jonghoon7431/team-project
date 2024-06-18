import { StDiv } from './Home.styled';
import styled from 'styled-components';

export const Home = () => {
  return (
    <StDiv>
      <StHomeSection>
        <StSlideSection>슬라이드 아이템 들어가는 곳</StSlideSection>
        <StCardsSection>
          <StCardsCotainer>
            <StCardsAlignBtn>▼ 최신순</StCardsAlignBtn>
            <StCards>
              <StCard>
                <StCardImg />
                <StTitle>제목</StTitle>
                <StPlace>장소</StPlace>
                <StPostItem>모집중</StPostItem>
              </StCard>
              <StCard>카드~</StCard>
              <StCard>카드~</StCard>
              <StCard>카드~</StCard>
            </StCards>
          </StCardsCotainer>
        </StCardsSection>
      </StHomeSection>
    </StDiv>
  );
};

const StHomeSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

const StSlideSection = styled.section`
  height: 500px;
  background-color: pink;
  display: flex;
  justify-content: center;
`;

const StCardsSection = styled.section`
  min-height: 300px;
  display: flex;
  justify-content: center;
`;

const StCardsCotainer = styled.div`
  width: 80vw;
`;

const StCardsAlignBtn = styled.button`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 10rem;
  height: 2.2rem;
  border-radius: 0.5rem;
  background-color: #fcfdff;
  color: #2d2d2d;
  font-weight: 700;
`;

const StCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33.3%, auto));
  grid-auto-rows: minmax(25rem, 0);
  row-gap: 2rem;
`;

const StCard = styled.div`
  background-color: gray;
  width: 30rem;
  height: 25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  gap: 0.5rem;
`;

const StCardImg = styled.div`
  background-color: black;
  width: 28rem;
  height: 16rem;
  margin: 1rem auto 0.5rem auto;
  border-radius: 0.5rem;
`;

const StTitle = styled.p`
  margin-left: 1rem;
  font-size: 2rem;
`;

const StPlace = styled.p`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

const StPostItem = styled.div`
  background-color: #2d2d2d;
  color: #fcfdff;
  width: 5.5rem;
  height: 1.7rem;
  border-radius: 0.5rem;
`;

// 스크롤 계속 생김 왜?
