import tw from 'twin.macro';
import { styled } from 'styled-components';
import { LiaMapPinSolid, LiaHeartSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom';

export const CommunityWrapper = tw.div`
  flex
  flex-col
  md:flex-row
  mx-auto
  w-4/5
`;


export const CommunityMainWrapper = styled.div`
  ${tw`
    w-full flex flex-col md:max-w-[690px] md:min-w-[550px]
  `}
`;

export const SearchContainer = tw.div`
  md:mb-10
  mb-2
  md:w-1/2
  w-full
  flex
  justify-center
  items-center
  mx-auto
`;

export const CommunityItemWrapper = tw.div`
  flex
  flex-col
  px-5
  max-h-[500px] overflow-y-scroll
  mb-5
  md:m-0
  border-b-2
  md:border-0
`;

export const WritingButton = styled.button`
  ${tw`w-32 px-5 py-1 mb-5 text-sm font-semibold rounded-lg md:w-40 bg-BASIC_LINE text-BASIC_PURPLE md:mb-10`}

  &:hover{
    background-color: #8580E1;
    color: #eeee;
  }
`;

//Title 

const BigTitleCommu = styled.div`
  font-family: 'Inconsolata', sans-serif;
  ${tw`mt-3 mb-3 text-xl font-semibold md:font-normal md:text-4xl md:mt-10 `}
                                                
`;
export const TitleSectionCommu = () => {
  return(
    <div className="flex flex-col">
      <BigTitleCommu>
        Community
      </BigTitleCommu>
      <div className="mb-3 text-xs md:mb-5 text-BASIC_GRAY md:text-base">
        동료를 찾거나 의견을 나누는 공간입니다 함께 여행 중인 당신의 생각을 들려주세요.
      </div>
    </div>
  )
}

export const DivisionWrapper = tw.div`
  flex
  md:flex-row
  flex-col
  md:justify-between
  pb-3
  border-b-2
  mr-3
`;

export const DivisionBox = tw.div`
  md:divide-x
  divide-slate-500
`;

export const DivisionTitle = styled.button`
  font-family: 'Inconsolata', sans-serif;
  ${tw`pr-3 text-sm md:px-3 md:text-xl`}

  &:hover, &:active, &:focus{
    font-weight: bolder;
    color: #8580E1;
    border-bottom:3px solid #8580E1;
  }

  &.clicked {
    font-weight: bolder;
    color: #8580E1;
    border-bottom:3px solid #8580E1;
  }
`;

export const DivisionFilter = styled.button`
  font-family: 'Inconsolata', sans-serif;
  ${tw`pr-2 text-xs font-normal md:px-2 md:text-sm text-BASIC_GRAY`}

  &:hover, &:active, &:focus {
    color: #8580e1;
  }

  &.clicked {
    color: #8580e1;
  }
`;

//오른쪽 공지사항과 랭킹 
export const RightSideWrapper = tw.div`
  hidden
  md:p-2
  md:flex
  md:w-full
  md:flex-col
`;

export const SideBoxWrapper = styled.div<{type?: string}>`
  ${tw`relative pb-3 mt-10 border rounded-lg border-BASIC_BORDER w-60 h-fit`}

  padding-top: ${(props) => (props.type === "ranking") ? "0px" : "2rem"};
`;

export const SideBoxPin = tw.div`
  w-10
  h-10
  p-2
  flex
  rounded-full
bg-BASIC_PURPLE
  absolute
  top-[-25px]
  right-[100px]
`;

const NoticeBox = styled.div<{exception?: string}>`
  ${tw`px-5 py-2 mx-2 mb-2 text-xs font-light cursor-pointer`}

  background-color: ${(props) => (props.exception === 'exception')? '#EEEEEE' : '#FFD9E0'};
  &:hover{
    background-color:${(props) => (props.exception === 'exception')? '#cccbcbec' : 'rgb(254 202 202)'}
  }
`;


export const NoticeItems = () => {
  const style = {fontSize: "23px", color: "white" }
  return(
    <div>
      <SideBoxPin><LiaMapPinSolid style={style} /></SideBoxPin>
      <NoticeBox>[8/12] 점검 공지사항</NoticeBox>
      <NoticeBox> V2.0 업데이트 안내사항</NoticeBox>
      <NoticeBox> V1.0 버전 지원 종료 안내</NoticeBox>
      <NoticeBox exception="exception"> 에러 발생 시 우선 조치 방법 안내</NoticeBox>
    </div>
  )
}

interface Rankingprops {
  title: string;
  date: string;
}


export const RankingTitle = ( {title, date}: Rankingprops ) => {
  return(
    <div className="flex flex-row items-end justify-between px-2 py-3 overflow-hidden text-base font-light border bg-BASIC_LINE border-b-BASIC_BORDER ">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-BASIC_TEXT">{date} 기준</div>
    </div>
  )
}

interface RankingItem {
  num: number;
  title: string;
  likes: number;
  communityId: number;
}


export const TextTruncate = (props: { text: string; maxLength: number }) => {
  const { text, maxLength } = props;

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  } else {
    const truncatedText = text.slice(0, maxLength) + '...';
    return <p>{truncatedText}</p>;
  }
};

export const RankingCommuItem = ({num, title, likes, communityId}: RankingItem) => {
  const style = {color: "#8580E1", fontSize: "1.5em"}

  return(
    <Link to={`/boards/${communityId}`}>
    <div className="flex flex-row px-3 py-3 text-xs font-light cursor-pointer text-BASIC_TEXT hover:text-BASIC_BLACK">
      <div className="pr-1 font-semibold">{num}</div>
      <div className="truncate ... px-1 ml-1 flex-1"><TextTruncate text={title} maxLength={20}/></div>
      <LiaHeartSolid style={style}/>
      <div className="pl-1 text-BASIC_PURPLE">{likes}</div>
    </div>
    </Link>
  )
}