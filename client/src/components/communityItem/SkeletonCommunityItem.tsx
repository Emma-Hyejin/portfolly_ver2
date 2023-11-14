import { LiaHeartSolid } from "react-icons/lia";
import { CommunityItemWrapper, ItemContent, ItemInfoDate, ItemInfoWrapper, ItemLikeButton, ItemTextWrapper, ItemUserName, ItemUserWrapper, TagSection } from "./CommunityItem.styled";


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonCommunityItem() {

    const style = {color: "#8580E1", fontSize: "2em"}

    return (
        <CommunityItemWrapper>
          <ItemUserWrapper>
            <img ><Skeleton circle={true}/></img>
            <ItemUserName></ItemUserName>
          </ItemUserWrapper>
          <ItemTextWrapper>
            {/* <Skeleton className={ItemTitle}/> */}
            <ItemContent>
              
            </ItemContent>
            <TagSection></TagSection>
          </ItemTextWrapper>
          <ItemInfoWrapper>
            <ItemInfoDate></ItemInfoDate>
            <ItemLikeButton><LiaHeartSolid style={style}/><div></div></ItemLikeButton>
          </ItemInfoWrapper>
        </CommunityItemWrapper>
    );
    
};