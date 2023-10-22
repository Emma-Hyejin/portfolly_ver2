import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemWrapper, ItemContent, ItemInfoDate, ItemInfoWrapper, ItemLikeButton, ItemLikeCount, ItemTextWrapper, ItemTitle, ItemUserName, ItemUserWrapper, TagSection } from './CommunityItem.styled';
import { LiaHeartSolid } from "react-icons/lia";
import Image from '@/commons/atoms/image/Image';
import { useState } from 'react';
import useUserImageHandler from '@/hooks/useUserImageHandler';
import { TextTruncate } from '@/pages/community-main/CommunityMain.styled';

export default function CommunityItem( props: { communityItem: CommuProps }) {
  const navigate = useNavigate();
  const eachData = props.communityItem;
  const [userProfileImage, _] = useState<string | JSX.Element>(useUserImageHandler(eachData.memberInfo.memberId));
  // console.log(eachData);

  const handleLink = (e: CommuProps) => {
    navigate(`/boards/${e.id}`, { state: e });
  };

  const style = {color: "#8580E1", fontSize: "2em"}
  const pic = typeof userProfileImage === 'string' ? userProfileImage : undefined;

  return (
    <CommunityItemWrapper
      onClick={() => {
        handleLink(eachData);
      }}
    >
      <ItemUserWrapper>
        <Image src={pic} url={`/`} shape="circle" size={65} />
        <ItemUserName>{eachData.memberInfo.name}</ItemUserName>
      </ItemUserWrapper>
      <ItemTextWrapper>
        <ItemTitle>{eachData.title}</ItemTitle>
        <ItemContent>
          <TextTruncate text={eachData.content} maxLength={80}/>  
        </ItemContent>
        <TagSection># React</TagSection>
      </ItemTextWrapper>
      <ItemInfoWrapper>
        <ItemInfoDate>2023.08.24</ItemInfoDate>
        <ItemLikeButton><LiaHeartSolid style={style}/><ItemLikeCount>{eachData.view}</ItemLikeCount></ItemLikeButton>
      </ItemInfoWrapper>
    </CommunityItemWrapper>
  );
}
