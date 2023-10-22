import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

import Main from './pages/main/Main';
import CommunityDetail from './pages/community-detail/CommunityDetail';
import CommunityMain from './pages/community-main/CommunityMain';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import MyPage from './pages/mypage/Mypage';
import PortfolioDetail from './pages/portfolio-detail/PortfolioDetail';
import PortfolioEdit from './pages/portfolio-edit/PortfolioEdit';
import AddCommunity from './pages/community-add/AddCommunity';
import EditCommunity from './pages/community-edit/EditCommunity';
import LandingPage from './pages/landingpage/LandingPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignupAgree from './pages/signup/SignupAgree';
import MainLayout from './commons/styles/layout/MainLayout';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
const App = () => {
  const clientId =
    '363137911116-hddsgl4il78hg3mfmssf0vanicga1vu4.apps.googleusercontent.com'
  ;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />}/>
              <Route path="/main" element={<Main />} />
              <Route path="/boards" element={<CommunityMain />} />
              <Route path="/boards/:id" element={<CommunityDetail />} />
              <Route path="/boards/edit/:id" element={<EditCommunity />} />
              <Route path="/boards/edit" element={<AddCommunity />} />
              <Route path="/portfolios/:portfolio_id" element={<PortfolioDetail />} />
              <Route path="/portfolio/edit" element={<PortfolioEdit />} />
            </Route>
            <Route path="/members/:id" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/agree" element={<SignupAgree />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>

    </QueryClientProvider>
  );
};

export default App;
