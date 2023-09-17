import tw from 'twin.macro';
import { styled } from 'styled-components';
import { LiaMapPinSolid, LiaHeartSolid } from 'react-icons/lia'

export const CommunityWrapper = tw.div`
  flex
  flex-row
  mx-auto
  w-4/5
`;


export const CommunityMainWrapper = styled.div`
  ${tw`
    w-full flex flex-col max-w-[690px] min-w-[550px]
  `}
`;

export const SearchContainer = tw.div`
  w-1/2
  flex
  justify-center
  items-center
  mx-auto
  mt-10
`;

export const CommunityItemWrapper = tw.div`
  flex
  flex-col
  px-5
`;

export const WritingButton = styled.button`
  ${tw`
  bg-BASIC_LINE
  text-BASIC_PURPLE
  font-semibold
  text-sm
  px-5
  py-1
  mb-10
  w-40
  rounded-lg`}

  &:hover{
    background-color: #8580E1;
    color: #eeee;
  }
`;

//Title 

const BigTitleCommu = styled.div`
  font-family: 'Inconsolata', sans-serif;
  ${tw`
    text-4xl
    mb-3
    mt-10
  `}
                                                
`;
export const TitleSectionCommu = () => {
  return(
    <div className="flex flex-col">
      <BigTitleCommu>
        Community
      </BigTitleCommu>
      <div className="text-BASIC_GRAY mb-5">
        동료를 찾거나 의견을 나누는 공간입니다 함께 여행 중인 당신의 생각을 들려주세요.
      </div>
    </div>
  )
}

export const DivisionWrapper = tw.div`
  flex
  flex-row
  justify-between
  pb-3
  border-b-2
  mr-3
`;

export const DivisionBox = tw.div`
  divide-x
  divide-slate-500
`;

export const DivisionTitle = styled.button`
  font-family: 'Inconsolata', sans-serif;
  ${tw`
    text-xl
    px-3
  `}

  &:hover, &:active, &:focus{
    font-weight: bolder;
    color: #8580E1;
    border-bottom:3px solid #8580E1;
  }
`;

export const DivisionFilter = styled.button`
  font-family: 'Inconsolata', sans-serif;
  ${tw`
    text-sm
    text-BASIC_GRAY
    font-normal
    px-2
  `}

  &:hover, &:active, &:focus {
    color: #8580e1;

  }
`;

//오른쪽 공지사항과 랭킹 
export const RightSideWrapper = tw.div`
  p-2
  flex
  flex-col
`;

export const SideBoxWrapper = styled.div<{type?: string}>`
  ${tw`border
  border-BASIC_BORDER
  rounded-lg
  pb-3
  mt-10
  w-60
  h-fit
  relative`}

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
  ${tw`
    px-5
    py-2
    font-light
    text-xs
    mb-2
    cursor-pointer
    mx-2
  `}

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
    <div className="flex flex-row justify-between items-end bg-BASIC_LINE text-base 
    font-light overflow-hidden py-3 px-2 border border-b-BASIC_BORDER ">
      <div className="font-semibold text-sm">{title}</div>
      <div className="text-xs text-BASIC_TEXT">{date} 기준</div>
    </div>
  )
}

interface RankingItem {
  num: number;
  title: string;
  likes: number;
}


export const RankingCommuItem = ({num, title, likes}: RankingItem) => {
  const style = {color: "#8580E1", fontSize: "1.5em"}
  return(
    <div className="px-3 py-3 flex flex-row text-xs font-light text-BASIC_TEXT cursor-pointer
    hover:text-BASIC_BLACK">
      <div className="pr-1 font-semibold">{num}</div>
      <div className="truncate ... px-1 ml-1">{title}</div>
      <LiaHeartSolid style={style}/>
      <div className="pl-1 text-BASIC_PURPLE">{likes}</div>
    </div>
  )
}