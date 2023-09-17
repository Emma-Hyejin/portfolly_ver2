import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemWrapper, ItemContent, ItemInfoDate, ItemInfoWrapper, ItemLikeButton, ItemLikeCount, ItemTextWrapper, ItemTitle, ItemUserName, ItemUserWrapper, TagSection } from './CommunityItem.styled';
import { LiaUserCircle, LiaHeartSolid } from "react-icons/lia";
import Views from '../views/Views';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import circleNoImg from '@/assets/circleNoImg.png';

export default function CommunityItem({ communityItem }: any) {
  const navigate = useNavigate();
  const eachData = communityItem;


  const handleLink = (e: CommuProps) => {
    navigate(`/boards/${e.id}`, { state: e });
  };

  const TextTruncate = ({ text, maxLength }: any) => {
    if (text.length <= maxLength) {
      return <p>{text}</p>;
    } else {
      const truncatedText = text.slice(0, maxLength) + '...';
      return <p>{truncatedText}</p>;
    }
  };

  const style = {color: "#8580E1", fontSize: "2em"}

  return (
    <CommunityItemWrapper
      onClick={() => {
        handleLink(eachData);
      }}
    >
      <ItemUserWrapper><LiaUserCircle size={50}/><ItemUserName>킹요뎡</ItemUserName></ItemUserWrapper>
      <ItemTextWrapper>
        <ItemTitle>프론트 구합니다. 삼성전자 업무 협업 요청이에요.</ItemTitle>
        <ItemContent>현재 프론트 3명 구하고 있습니다. <br/>삼성전자 협업 요청 업무하고 약 50 페이지 정도 디자인 구현 완료 되었습니다.</ItemContent>
        <TagSection># React</TagSection>
      </ItemTextWrapper>
      <ItemInfoWrapper>
        <ItemInfoDate>2023.08.24</ItemInfoDate>
        <ItemLikeButton><LiaHeartSolid style={style}/><ItemLikeCount>122</ItemLikeCount></ItemLikeButton>
      </ItemInfoWrapper>
      {/* <MemberProfile
        type={'board'}
        member={{
          id: eachData.memberInfo.memberId,
          name: eachData.memberInfo.name,
          imageUrl: circleNoImg,
        }}
      />
      <h2>{eachData.title}</h2>
      <TextTruncate text={eachData.content} maxLength={65} />
      <Views view={eachData.view} /> */}
    </CommunityItemWrapper>
  );
}
