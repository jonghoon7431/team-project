import getDataUrl from '@/utils/getDataUrl';
import resizeAndConvertImage from '@/utils/resizeAndConvertImg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@/components/Button';

function FixMyProfile() {
  //const { user, upProfile, upNickName } = useAuth();

  //테스트용 임의 유저정보
  const user = {
    nickName: '홍길동',
    email: 'qwer1234@gmail.com',
    profile: '',
    intro: '좋아하는 게임: 브루마블'
  };

  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState('');
  const [profileName, setProfileName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profileIntro, setProfileIntro] = useState('');
  const [imgFile, setImgFile] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const convertedImg = await resizeAndConvertImage(file);
        const base64 = await getDataUrl(file);

        console.log(convertedImg);
        setProfileImage(base64);
        setImgFile(convertedImg);
      } catch (error) {
        console.error('이미지 가져오기에 실패하였습니다.', error);
      }
    }
  };

  const handleNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleIntroChange = (e) => {
    setProfileIntro(e.target.value);
  };

  // 닉네임, 프로필사진 변경
  const handleSubmit = (e) => {
    e.preventDefault();

    if (imgFile) {
      const picUpdate = {
        file: imgFile,
        email: userEmail
      };

      setProfileImage(picUpdate);
    }

    if (!profileName) return alert('변경된 것이 없습니다!');

    const nickUpdate = {
      nickName: profileName,
      email: userEmail
    };

    setProfileName(nickUpdate);

    if (profileIntro) {
      const introUpdate = {
        intro: profileIntro,
        email: userEmail
      };

      setProfileIntro(introUpdate);
    }

    console.log(user);
  };

  const handleBackClick = () => {
    navigate('/my-page');
  };

  useEffect(() => {
    if (user) {
      setProfileImage(user.profile);
      setProfileName(user.nickName);
      setUserEmail(user.email);
      setProfileIntro(user.intro);
    }
  }, [user]);

  return (
    <Section>
      <LeftDiv>
        <ImageBox>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={profileImage ? profileImage : user && user.profile}
            alt="profile image"
          />
        </ImageBox>
        <Button
          buttonText={'이미지 변경하기'}
          color={'#2D2D2DDD'}
          type={'button'}
          onClick={() => document.getElementById('fileInput').click()}
        />
        <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
      </LeftDiv>
      <RightDiv>
        <Label>닉네임 변경하기</Label>
        <br />
        <Input type="text" defaultValue={profileName} onChange={handleNameChange} />
        <br />
        <Label>한 줄 소개 변경하기</Label>
        <br />
        <Input type="text" defaultValue={profileIntro} onChange={handleIntroChange} />
        <Buttons>
          <Button buttonText={'저장'} type={'button'} color="#2D2D2DDD" onClick={handleSubmit} />
          <Button buttonText={'돌아가기'} type={'button'} color="#2D2D2DDD" onClick={handleBackClick} />
        </Buttons>
      </RightDiv>
    </Section>
  );
}

const Section = styled.section`
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px 50px 20px 50px;
`;

const LeftDiv = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const RightDiv = styled.div`
  margin-left: 60px;
`;

const ImageBox = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 70%;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  overflow: hidden;
  margin: 50px 0px 20px 0px;
`;

const Label = styled.label`
  font-size: 19px;
`;

const Input = styled.input`
  margin: 20px 0px 25px 0px;
  font-size: 15px;
  height: 25px;
  font-size: 25px;
  padding: 5px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export default FixMyProfile;
