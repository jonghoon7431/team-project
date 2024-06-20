import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StButtons,
  StFixSection,
  StLabelGame,
  StLabelNick,
  StProfilePicBox,
  StProfilePics,
  StFixProfile,
  StProfileBox
} from './FixMyProfile.styled';
import Button from './Button';
import supabase from '@/supabase/supabaseClient';
import { useQuery } from '@tanstack/react-query';
import { getUser, updateProfileWithSupabase } from '@/api/api.auth';
import { useQueryClient } from '@tanstack/react-query';

function FixMyProfile() {
  const queryClient = useQueryClient();
  const {
    data: user,
    isPending,
    isError
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  });

  console.log(user);
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState('');
  const [profileName, setProfileName] = useState('');
  const [userId, setUserId] = useState('');
  const [profileFavorite, setProfileFavorite] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  // const onFileChange = (e) => {
  //   const file = imgRef.current.files[0];
  //   setImageFile(file);

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result);
  //   };
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
  };

  const handleNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleFavoriteChange = (e) => {
    setProfileFavorite(e.target.value);
  };

  // 닉네임, 프로필사진 변경
  const handleSubmit = async (e) => {
    e.preventDefault();

    const avatar = 'profile_image';
    const FILE_NAME = 'profileImage';
    const fileUrl = `${FILE_NAME}_${user.id}`;

    const updatingObj = {};

    if (!profileName) {
      return alert('변경된 것이 없습니다!');
    }

    if (profileName !== user.nickname) {
      updatingObj.nickname = profileName;
    }

    if (profileFavorite !== user.favorite) {
      updatingObj.favorite = profileFavorite;
    }

    if (profileImage !== user.image_url) {
      const response = await supabase.storage.from('avatars').upload(fileUrl, profileImage, { upsert: true });
      const publicUrl = supabase.storage.from('avatars').getPublicUrl(fileUrl); //superbase에서 받아온 이미지url

      updatingObj.image_url = publicUrl.data.publicUrl;
    }

    const response = await updateProfileWithSupabase(updatingObj, user.id);

    queryClient.invalidateQueries(['user']);
  };

  const handleBackClick = () => {
    navigate('/my-page');
  };

  useEffect(() => {
    if (user) {
      setProfileImage(user.image_url);
      setProfileName(user.nickname);
      setUserId(user.id);
      setProfileFavorite(user.favorite);
    }
  }, [user]);

  if (isPending) return <div>Loading...</div>;

  return (
    <StFixSection>
      <StFixProfile>
        <StProfilePics>
          <StProfilePicBox>
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={profileImage ? previewUrl : user.image_url}
              alt=""
            />
          </StProfilePicBox>
          <Button
            buttonText={'이미지 변경하기'}
            color={'#2D2D2D'}
            type={'button'}
            onClick={() => document.getElementById('fileInput').click()}
          />
          <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </StProfilePics>
        <StProfileBox>
          <StLabelNick>
            닉네임 <input type="text" value={profileName} onChange={handleNameChange} />
          </StLabelNick>
          <StLabelGame>
            좋아하는 게임 <input type="text" value={profileFavorite} onChange={handleFavoriteChange} />
          </StLabelGame>
        </StProfileBox>
        <StButtons>
          <Button buttonText={'저장'} type={'button'} color="#2D2D2D" onClick={handleSubmit} />
          <Button buttonText={'돌아가기'} type={'button'} color="#2D2D2D" onClick={handleBackClick} />
        </StButtons>
      </StFixProfile>
    </StFixSection>
  );
}

export { FixMyProfile };
