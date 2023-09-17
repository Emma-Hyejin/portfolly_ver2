import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';
// import { call } from '@/utils/apiService';

import { CommuProps } from '@/types';

import {
  CommunityItemWrapper,
  CommunityWrapper,
  SearchContainer,
  CommunityMainWrapper,
  TitleSectionCommu,
  DivisionTitle,
  DivisionFilter,
  DivisionBox,
  DivisionWrapper,
  RightSideWrapper,
  SideBoxWrapper,
  NoticeItems,
  RankingTitle,
  RankingCommuItem,
  WritingButton,
} from './CommunityMain.styled';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CommunityMain() {
  // const [data, setData] = useState<CommuProps[]>([]);
  // const [searchParams] = useSearchParams();
  // const division = searchParams.get('division');
  // const page = 1;
  // const size = 30;

  // const state: any = useSelector((state) => state);
  // const currentLoginState = state.loginSlice.isLogin;

  // useEffect(() => {
  //   const showWholeCommu = async () => {
  //     await axios
  //       .get(`https://api.portfolly.site/boards/pages?division=${division}&page=${page}&size=${size}`)
  //       .then((res) => {
  //         console.log(res.data.data);
  //         setData(res.data.data);
  //       });
  //   };

  //   showWholeCommu();
  // }, [division]);

  

  // 검색 - 07.11 효정
  // const [currentSearch, setCurrentSearch] = useState('');
  // const [searchs, setSearchs] = useState([] as any);

  // useEffect(() => {
  //   setSearchs(data);
  // }, [data]);

  return (
    <CommunityWrapper>
    <CommunityMainWrapper>
      {/* <SearchContainer>
        <Search
          setSearchValue={setCurrentSearch}
          currentSearch={currentSearch}
          data={data}
          setSearchs={setSearchs}
        />
      </SearchContainer> */}
      <TitleSectionCommu/>
      <WritingButton>새글 등록하기</WritingButton>
      
        <DivisionWrapper>
          <DivisionBox>
            <DivisionTitle>Recruitment</DivisionTitle>
            <DivisionTitle>Cooperation</DivisionTitle>
          </DivisionBox>

          <DivisionBox>
            <DivisionFilter>최신순</DivisionFilter>
            <DivisionFilter>인기순</DivisionFilter>
          </DivisionBox>
        </DivisionWrapper>

        <CommunityItemWrapper>
          {Array.from({length: 5},(_, index) => {
            return <CommunityItem key={index}/>
          }) }


          {/* {currentLoginState ? (
            <Link to="/boards/edit">
                <WritingButton>새글 등록하기</WritingButton>
            </Link>
          ) : ''}
          {searchs.length > 0 ? (
            <ListsWrapper>
              {searchs.map((communityItem: any) => {
                return <CommunityItem key={communityItem.id} communityItem={communityItem} />;
              })}
            </ListsWrapper>
          ) : (
            <NodataImage src={datano} alt="no data" />
          )} */}


        </CommunityItemWrapper>
    </CommunityMainWrapper>

    <RightSideWrapper>
      <SideBoxWrapper>
        <NoticeItems/>
      </SideBoxWrapper>

      <SideBoxWrapper type="ranking">
        <RankingTitle title={"베스트 게시글"} date={"오후 6시"} />
        {Array.from({length:5} ,(_, index)=> {
          return <RankingCommuItem key={index} num={index+1} title={"프론트 구합니다. 삼성전자 앱 제작"} likes={122}/>
        })}
      </SideBoxWrapper>
    </RightSideWrapper>

    </CommunityWrapper>
  );
}
