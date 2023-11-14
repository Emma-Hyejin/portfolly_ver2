import { Link } from 'react-router-dom';

import PortfolioSection from '@/components/home-section/portfolio-section/PortfolioSection';
import CommunitySection from '@/components/home-section/community-section/CommunitySection';

import { HomeWrapper, HomeContentsWrapper } from './LandingPage.styled';


export default function LandingPage() {

  return (
    <HomeWrapper>
      <HomeContentsWrapper>
        <Link to='/main'>
          <PortfolioSection />
        </Link>
        <Link to='/boards'>
          <CommunitySection />
        </Link>
      </HomeContentsWrapper>
    </HomeWrapper>
  );
}
