import { BottomLoginInput, InputIcon, LoginInput, MiddleLoginInput, TopLoginInput } from "./Input.styled";
import { IconType } from "react-icons/lib";

interface InputFormType {
    icon?: IconType;
    type?: string;
    placeholder?: string;
}

export const MiddleRoundInput = ({icon: Icon}: InputFormType) => (
    <MiddleLoginInput>
        <InputIcon>{Icon && <Icon/>}</InputIcon>
        {
            /**pattern 받는 부분이나 type에 따라 다르게 표시하고 싶은데 고민 */
        }
    </MiddleLoginInput>
)


export const TopRoundInput = ({icon: Icon, type, placeholder}: InputFormType) => (
    <TopLoginInput>
      <InputIcon>{Icon && <Icon/>}</InputIcon>
      <LoginInput type={type} placeholder={placeholder}/>
    </TopLoginInput>
  )
  
  export const BottomRoundInput = ({icon: Icon, type, placeholder}: InputFormType) => (
    <BottomLoginInput>
      <InputIcon>{Icon && <Icon/>}</InputIcon>
      <LoginInput type={type} placeholder={placeholder}/>
    </BottomLoginInput>
  )