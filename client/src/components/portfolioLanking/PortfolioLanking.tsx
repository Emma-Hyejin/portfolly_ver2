import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { category } from '@/store/categorySlice';

import { PortfolioLankingWrapper,ProlfolioLankingItemWrapper, PortfolioLankingItem } from './PortfolioLanking.styled';

export default function PortfolioLanking() {

  const categoryMap = {
    web: 'web',
    app: 'app',
    '3danimation': '3danimation',
    graphicdesign: 'graphicdesign',
    photo: 'photo',
  };

  const selectedCategory = useSelector(category);

  const categoryParam = categoryMap[selectedCategory] || 'web';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.portfolly.site/portfolios?category=${categoryParam}&page=1&size=5`)
        const responseData = response.data.data;
        const views = responseData.map((item:any) => item.view)

        for(let i = 0; i<views.length; i++){
          let arr = [];
          if(views[i] > views[i+1]){
            arr.push(views[i]);
          }
          arr.push(views[i+1]);

          return console.log(arr);
        }

        console.log(views);
      }catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <PortfolioLankingWrapper>
      <h1>TOP</h1>
      <ProlfolioLankingItemWrapper>
        <PortfolioLankingItem>냐호</PortfolioLankingItem>
        <PortfolioLankingItem>호야</PortfolioLankingItem>
        <PortfolioLankingItem>호엥</PortfolioLankingItem>
      </ProlfolioLankingItemWrapper>
    </PortfolioLankingWrapper>
    </>
  );
};