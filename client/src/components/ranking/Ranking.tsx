import { Link } from 'react-router-dom';

import { CommuProps, Portfolio } from '@/types';
import { ContentPart, ItemImg, RankingContainer, RankingItem, TitleContainer, TitlePart, BigTitle, RankingItemContainer } from './Ranking.styled';
import noPic from '@/assets/noPic.png';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { RankingCommuItem, RankingTitle } from '@/pages/community-main/CommunityMain.styled';

interface RankingItemsTypes {
  items: CommuProps[] | Portfolio[];
  setTime?: Dispatch<SetStateAction<string>>;
  timeUpdate: string;
  type?: string;
}

type RankingData = CommuProps | Portfolio;
 
export default function Ranking({items, timeUpdate, type}: RankingItemsTypes) {
  const [rankingData, setRankingData] = useState<RankingData[]>(items);

  useEffect(() => {
    if(type === 'community'){
      setRankingData(items as CommuProps[]);

    } 
    if(type === 'portfolio'){
      setRankingData(items as Portfolio[]);
    }


  }, [type, items]);
  
//   const handleTime = () => {
//     setInterval(() => {
//       const currentTime = new Date(new Date().getTime());
//       const hour = currentTime.getHours();
//       const divisionPeriod = hour > 12 ? '오후' : '오전';
//       const changedHour = hour > 12 ? hour - 12 : hour;
//       const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
//       setTime(updatedTimeSet)
//     }, 21600000);
// //21600000
//     console.log('인터벌 함수 실행합니다.', timeUpdate);
//   }


  if(type === "community"){
    return(
      <>
      <RankingTitle title={"베스트 게시글"} date={"오후 6시"}/>
        {rankingData.slice(0,5).map((communityItem: RankingData, index: number) => {
          const rank = index+1;
          return <RankingCommuItem num={rank} title={communityItem.title} likes={communityItem.view} communityId={communityItem.id}/>
        })}
      </>
    )
  }

  if(type === 'portfolio'){
    return (
      <RankingContainer>
        <BigTitle>{`현재 인기 작품 순위 [ ${timeUpdate} 기준]`}</BigTitle>
        <RankingItemContainer>
        {rankingData.length > 0
          ? rankingData.map((el:RankingData ) => {
            if('firstImage' in el){
              const thumbnail = el.firstImage === null ? noPic : el.firstImage;
              return (
                <Link to={`/portfolios/${el.id}`}>
                  <RankingItem>
                    <TitleContainer>
                      <TitlePart>{el.title}</TitlePart>
                      <ContentPart>@ {el.member.name}</ContentPart>
                    </TitleContainer>
                    <ItemImg src={thumbnail} alt={el.title} />
                  </RankingItem>
                </Link>
              );
            } 
            })
          : null}
        </RankingItemContainer>
      </RankingContainer> 
    );

  }
}