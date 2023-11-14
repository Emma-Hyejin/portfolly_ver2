import { Link } from 'react-router-dom';
import { login } from '@/store/loginSlice';

import {VscBell} from 'react-icons/vsc';
import { DropdownContainer,DropdownUL, ModalLink } from './Dropdown.styled';
import { useDispatch } from 'react-redux';


export default function Dropwdown (props: {isOpen: boolean, loginState: boolean, onClick: () => void}) {
    //React의 컴포넌트의 props는 객체 형태로 전달되므로 객체 형태로 지정 
    const isOpen = props.isOpen;
    const loginState = props.loginState;
    const handleOpen = props.onClick;
    const memberId = localStorage.getItem('memberId');
    const dispatch = useDispatch();

    const handleLoginState = () => {
        dispatch(login({ isLogin: false }));
    }

    return(
        <DropdownContainer className={isOpen ? 'expanded' : ''}>
            <DropdownUL>
                <ModalLink onClick={handleOpen}>Close</ModalLink>
                <ModalLink><div className="mr-1"><VscBell size="10"/></div>Alarm</ModalLink>
                <ModalLink><Link to={`/boards`}>Community</Link></ModalLink>
                <ModalLink><Link to="/portfolio/edit">New Portfolio</Link></ModalLink>
                {loginState ? (<>
                <ModalLink><Link to={`/members/${memberId}`}>My Page</Link></ModalLink>
                <ModalLink onClick={handleLoginState}>Log Out</ModalLink></>
                ): <ModalLink><Link to="/login">Log In</Link></ModalLink>}

            </DropdownUL>

        </DropdownContainer>
    )
}
