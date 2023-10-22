import { useState, useEffect } from 'react';
import { 
  useNavigate,
  // useSearchParams
} from 'react-router-dom';
import { RootState } from '@/store';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';

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
import { NodataImage } from '../main/Main.styled';
import datano from '@/assets/datano.png';

import AlertModal from '@/components/modal/AlertModal';
import Loading from '@/components/loading/Loading';
import { useQuery } from '@tanstack/react-query';

export default function CommunityMain() {
  const [commuData, setCommuData] = useState<CommuProps[]>([]);
  //원래 data, setData
  const [filteredData, setFilteredData] = useState<CommuProps[]>([]);
  const [division, setDivision] = useState('COOPERATION');
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  //인기순 필터 적용 및 베스트 게시굴에서 사용.
  const sortedData = [...commuData].sort((acc:CommuProps, cur:CommuProps) => cur.view - acc.view);
  const [isWating, setIsWating] = useState(true);
  //원래 isLoading, setIsLoading
  const [currentSearch, setCurrentSearch] = useState('');
  const [timeUpdate, setTime] = useState(() => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    return updatedTimeSet;
  });
  // const [searchParams] = useSearchParams();
  // const division = searchParams.get('division');
  const page = 1;
  const size = 30;

  const currentLoginState = useSelector((state: RootState) => state.loginSlice.isLogin);

//   useEffect(() => {
//     const showWholeCommu = async () => {
//       await axios
//         .get(`https://api.portfolly.site/boards/pages?division=${division}&page=${page}&size=${size}`)
//         .then((res) => {
//           console.log(res.data.data);
//           setCommuData(res.data.data);
//           setIsWating(false);
//         });
//     };

//     showWholeCommu();
//  }, [division]);

  //https://velog.io/@kandy1002/React-Query-%ED%91%B9-%EC%B0%8D%EC%96%B4%EB%A8%B9%EA%B8%B0
  //react-Query 시도
  const {data} = useQuery(['communityData', division], async () => {
    const response = await axios.get(`https://api.portfolly.site/boards/pages?division=${division}&page=${page}&size=${size}`);
    const responseData = response.data.data;
    setCommuData(responseData);
    return responseData;    
  }, {
    enabled: !!division,
    refetchOnWindowFocus: false,
  });

  console.log(data);
  // if(isLoading) return <p>Loading...</p>;
  // if(isError) return isError;

  //업데이트 시간 세팅
  const handleTime = () => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    setTime( updatedTimeSet );
  };

  useEffect(() => {
    const handleInterval = setInterval(() => {
      handleTime();
      console.log('인터벌 함수 실행', timeUpdate);
    }, 21600000);

    return () => {
      clearInterval(handleInterval)
    };

  }, [timeUpdate]);

  useEffect(() => {
    setFilteredData(commuData);
  }, [commuData])

  const [ isClicked, setIsClicked ]  = useState({
    division: false,
    filter: false,
  });

  const handleDivisionClick = () => {
    setIsClicked((prevState) => ({
      ...prevState,
      division: !prevState.division,
    }));
  };

  const handleFilterClick = () => {
    setIsClicked((prevState) => ({
      ...prevState,
      filter: !prevState.filter,
    }));
  };

  const FilterData = (filterType:string) => {
    if(filterType === 'recent'){
      setFilteredData(commuData);
      handleFilterClick();
    }
    if(filterType === 'popular'){
      setFilteredData(sortedData);
      handleFilterClick();
    }
  }

  const handleDivision = (divisionType:string) => {
    if(divisionType === 'recrutiment'){
      setDivision('RECRUITMENT');
      handleDivisionClick();
    }
    if( divisionType === 'cooperation'){
      setDivision('COOPERATION');
      handleDivisionClick();
    }
  }

  const handleAlert = () => {
    setOpenAlert(!openAlert);
  }

  const handleNavigate = (loginState: boolean) => {
    if(loginState === true){
      navigate('/boards/edit')
    }
    setOpenAlert(true);
  }



  return (
    // <>{isWating ? (
    //   <Loading/> 
    // ):(
    <CommunityWrapper>
    <CommunityMainWrapper>
      <TitleSectionCommu/>
      <WritingButton onClick={() => handleNavigate(currentLoginState)}>
        새글 등록하기
      </WritingButton>
      {
        openAlert && (
          <AlertModal type={"etc"} onCancel={handleAlert} title={"잠깐!"} content={"로그인한 사용자만 사용할 수 있습니다!"} clicked={"닫기"}/>
        )
      }
      <SearchContainer>
        <Search
          setSearchValue={setCurrentSearch}
          currentSearch={currentSearch}
          data={commuData}
          setSearchs={setFilteredData}
        />
      </SearchContainer>
      
      <DivisionWrapper>
        <DivisionBox>
          <DivisionTitle onClick={() => handleDivision('recrutiment')} className={isClicked.division ? 'clicked' : ''}>Recruitment</DivisionTitle>
          <DivisionTitle onClick={() => handleDivision('cooperation')} className={isClicked.division ? '' : 'clicked'}>Cooperation</DivisionTitle>
        </DivisionBox>

        <DivisionBox>
          <DivisionFilter onClick={() => FilterData("recent")} className={isClicked.filter ? 'clicked' : ''}>최신순</DivisionFilter>
          <DivisionFilter onClick={() => FilterData("popular")} className={isClicked.filter ? '' : 'clicked'}>인기순</DivisionFilter>
        </DivisionBox>
      </DivisionWrapper>

      <CommunityItemWrapper>
        {filteredData.length > 0 ? 
        (
          filteredData.map((communityItem: CommuProps) => {
            return <CommunityItem key={communityItem.id} communityItem={communityItem}/>
          })
        ) : (
          <NodataImage src={datano} alt="noData"/>
        )
        }
      </CommunityItemWrapper>
    </CommunityMainWrapper>

    <RightSideWrapper>
      <SideBoxWrapper>
        <NoticeItems/>
      </SideBoxWrapper>

      <SideBoxWrapper type="ranking">
        <RankingTitle title={"베스트 게시글"} date={timeUpdate} />
        {filteredData.length > 0 ? (
          <>
          {sortedData.slice(0,5).map((communityItem: CommuProps, index: number) => {
            const rank = index+1;
            return <RankingCommuItem key={index} num={rank} title={communityItem.title} likes={communityItem.view} communityId={communityItem.id}/>
          })}
          </>
        ): null}
      </SideBoxWrapper>
    </RightSideWrapper>
    </CommunityWrapper>
    // )}
    // </>
  );
}
