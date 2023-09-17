import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

import Main from './pages/main/Main';
import CommunityDetail from './pages/community-detail/CommunityDetail';
import CommunityMain from './pages/community-main/CommunityMain';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import MyPage from './pages/mypage/Mypage';
import MainLayout from './commons/styles/layout/MainLayout';
import PortfolioDetail from './pages/portfolio-detail/PortfolioDetail';
import PortfolioEdit from './pages/portfolio-edit/PortfolioEdit';
import AddCommunity from './pages/community-add/AddCommunity';
import EditCommunity from './pages/community-edit/EditCommunity';
import LandingPage from './pages/landingpage/LandingPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Neon from './pages/gisun/Neon';
import SignupAgree from './pages/signup/SignupAgree';

const App = () => {
  //희재님 363137911116-hddsgl4il78hg3mfmssf0vanicga1vu4.apps.googleusercontent.com
  //내꺼 614000395362-h7u67qqcd1tcfnfae6cocbhj99680ru5.apps.googleusercontent.com
  const clientId =
    '363137911116-hddsgl4il78hg3mfmssf0vanicga1vu4.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route element={<MainLayout />}>
              <Route path="/main" element={<Main />} />
              <Route path="/boards" element={<CommunityMain />} />
              <Route path="/boards/:id" element={<CommunityDetail />} />
              <Route path="/boards/edit/:id" element={<EditCommunity />} />
              <Route path="/boards/edit" element={<AddCommunity />} />
            </Route>
            <Route path="/members/:id" element={<MyPage />} />
            <Route path="/portfolios/:portfolio_id" element={<PortfolioDetail />} />
            <Route path="/portfolio/edit" element={<PortfolioEdit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/agree" element={<SignupAgree />} />
            <Route path="/neon" element={<Neon />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
