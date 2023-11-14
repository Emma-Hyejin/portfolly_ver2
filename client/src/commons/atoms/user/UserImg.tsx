import { useState } from 'react';
import userImg from '../../../assets/userImg.jpg';
import { ImgContainer, UserImage } from './UserImg.styled';
import DropDownBox from '../dropdown/DropDownBox';

export default function UserImg() {
  const [ isDropdown, setIsDropdown ] = useState(false);

  const handleMenu = () => {
    setIsDropdown(!isDropdown)
  };

  return (
    <>
      <ImgContainer onClick={handleMenu}>
        <UserImage src={userImg} alt="userimage"></UserImage>
        {
          isDropdown ? 
            (
              <DropDownBox isOpen={false}/>
            )
          : null
        }
      </ImgContainer>
    </>
    
  );
}
