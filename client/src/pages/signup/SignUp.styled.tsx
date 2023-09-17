import tw from 'twin.macro';
import styled from 'styled-components';


//1. 동의 사항 회원가입 페이지
export const SignupWrapper = tw.div`
    w-[544px]
    h-full
    mx-auto
    items-start
    overflow-y-scroll
    relative
    flex
    flex-col
`;

export const LogoV2Img = tw.img`
    h-20
    w-32
    p-3
    mb-10
`;

//체크박스 
export const CheckBoxLabel = tw.label`
`;

export const CheckInput = styled.input`
    ${tw`
        appearance-none
        flex
        w-6
        h-6
        rounded-full
        border-2
        border-BASIC_BORDER
        
    `}
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='gray' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &:checked {
        border-color: #8580E1;
        background-color: #8580E1;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    
`;

export const CheckBox = () => {
    return(
        <CheckBoxLabel>
            <CheckInput type="checkbox"></CheckInput>
        </CheckBoxLabel>
    )
}



export const AgreeBoxItem = styled.div<{state?: string}>`
    ${tw`flex
    flex-col
    `}

    margin-bottom: ${(props) => (props.state === 'bottom') ? '120px' : '32px'};
`;

export const TitleWrapper = tw.div`
    flex
    flex-row
    mb-3
`;

export const BigTitleText = tw.div`
    text-xl
    font-semibold
    ml-2
`;

export const PointTitle = styled.span<{point?: string}>`
    color: ${(props) => (props.point === 'point') ? '#8580E1' : '#555555'};
    ${tw`
        text-sm
        font-bold
    `}
`;

export const PointText = styled.span<{pointbold?: string}>`
    color: ${(props) => (props.pointbold === 'black' ) ? '#11111' : '#8580E1'};
    font-weight: ${(props) => (props.pointbold === 'black')? 'bold': 'normal'};
    font-size: ${(props) => (props.pointbold === 'black')? '15px': '12px'};
`;

export const MiddleTitleText = tw.div`
    ml-2
    font-normal
`;

export const ContentText = tw.div`
    text-sm
    text-BASIC_GRAY
    ml-8
`;

export const ContentBox = tw.div`
    border
    border-BASIC_BORDER
    text-BASIC_GRAY
    rounded-md
    px-3
    py-4
    text-sm
    overflow-y-scroll
    max-h-36
    ml-8
`;

export const SubmitWrapper = tw.div`
    min-w-[544px]
    bg-white
    fixed
    bottom-0
`;

export const SubmitButton = styled.input`
    ${tw`
    min-w-full
    h-12
    rounded-lg
    bg-BASIC_PURPLE
    my-3
    cursor-pointer
    text-BASIC_LINE
    text-xl
    font-bold
    `}

    &:hover{
        background-color: #9999;
    }
`;


//2. 회원가입 폼 페이지
export const SignupInputWrapper = tw.form`
    bg-purple-200
    w-full
    px-3
    mb-5
`;

export const SignupRoleWrapper = tw.form`
    bg-green-300
    w-full
    p-3
    mb-5
    border
    border-BASIC_BORDER
    rounded-lg
    flex
    flex-row

`;

export const TitleText = tw.div`
    font-bold
    text-BASIC_TEXT
`;

export const ContentWrapper = tw.div`
    text-sm
    font-light
    text-BASIC_TEXT
    px-5
    py-3
    border
    border-BASIC_BORDER
    rounded-lg
    mx-2
    mt-3
    w-[246px]
`;

export const RoleWrapper = tw.div`
    flex
    flex-col
    items-center
`;

export const SelectDivision = styled.div`
    ${tw`
    m-2
    w-fit
    h-8
    border
    border-BASIC_BORDER
    rounded-md
    divide-BASIC_BORDER
    divide-x
    `}


`;

export const DivisionInput = styled.button`
    ${tw`
        px-10
        h-full
        overflow-hidden
    `}
    &:hover, &:focus, &:active{
    background-color:#8580E1;
    color: white;
    font-weight: bolder;
    }
`;

