import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '@/store/categorySlice';

import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer, NodataImage, TitleSection, CategorySection, FilterWrapper, WriteButton } from './Main.styled';
import AppItem from '@/components/appItem/AppItem';
import GraphicItem from '@/components/graphicItem/GraphicItem';
import PhotoItem from '@/components/photoItem/PhotoItem';
import ThreeDItem from '@/components/threeDitem/ThreeDITem';
import Search from '@/components/search/Search';
import PortfolioLanking from '@/components/portfolioLanking/PortfolioLanking';
import datano from '@/assets/datano.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const categoryMap = {
  web: 'web',
  app: 'app',
  '3danimation': '3danimation',
  graphicdesign: 'graphicdesign',
  photo: 'photo',
};

type Item = {
  data: {
    title: string;
    membername: string;
  };
};

export default function Main() {
  const selectedCategory = useSelector(category);
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categoryParam = categoryMap[selectedCategory] || 'web';

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        await axios.get(`https://api.portfolly.site/portfolios?category=${categoryParam}&page=1&size=5`).then((res) => {
          console.log(res.data.data);
          setItems(res.data.data);
          setFilteredItems(res.data.data);
        });
      } catch (error) {
        console.error('데이터를 가져올 수 없습니다', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const renderItems = () => {
    switch (selectedCategory) {
      case 'web':
        return filteredItems.map((element, index) => <WebItem item={element} key={index} />);
      case 'app':
        return filteredItems.map((element, index) => <AppItem item={element} key={index} />);
      case '3danimation':
        return filteredItems.map((element, index) => <ThreeDItem item={element} key={index} />);
      case 'graphicdesign':
        return filteredItems.map((element, index) => <GraphicItem item={element} key={index} />);
      case 'photo':
        return filteredItems.map((element, index) => <PhotoItem item={element} key={index} />);
      default:
        return null;
    }
  };

  const [searchs, setSearchs] = useState([] as any);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchs(renderItems());
    }

    setSearchs(items);
  }, [items]);

  console.log(searchs);

  return (
    <>
      <PortfolioLanking />
      <TitleSection>
        <h1>Portfolio</h1>
        <Search setSearchValue={setSearchTerm} currentSearch={searchTerm} data={items} setSearchs={setSearchs} />
        <Link to='/portfolio/edit'>
          <WriteButton>포트폴리오 등록</WriteButton>
        </Link>
      </TitleSection>
      <CategorySection>
        <CategoryNavBar />
        <FilterWrapper>
          <li className='currentPick'>최신순</li>
          <li>|</li>
          <li>인기순</li>
        </FilterWrapper>
      </CategorySection>
      <WebItemsContainer>
        {searchs.length > 0 ? (
          searchs.map((searchedItem: any, index: any) => {
            if (categoryParam === 'web') {
              return <WebItem item={searchedItem} key={index} />;
            }
            if (categoryParam === 'app') {
              return <AppItem item={searchedItem} key={index} />;
            }
            if (categoryParam === '3danimation') {
              return <ThreeDItem item={searchedItem} key={index} />;
            }
            if (categoryParam === 'graphicdesign') {
              return <GraphicItem item={searchedItem} key={index} />;
            }
            if (categoryParam === 'photo') {
              return <PhotoItem item={searchedItem} key={index} />;
            }
          })
        ) : (
          <NodataImage src={datano} alt="no data" />
        )}
      </WebItemsContainer>
    </>
  );
}
