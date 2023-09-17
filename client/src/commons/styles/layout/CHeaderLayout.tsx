import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { BackImgControl } from './Layout.styled';

export default function CHeaderLayout() {
  return (
    <BackImgControl>
      <Header />
      <Outlet />
      <Footer />
    </BackImgControl>
  );
}
