import { useNavigate } from 'react-router-dom';
import {GithubAuthProvider , signInWithPopup } from '@firebase/auth';
import {firbase_auth} from '../../firebase'
import { ERROR_CLOSE } from '../../errorType/error'
import { Card } from '@mui/material';
import styled from 'styled-components';

const StyleCard = styled("div")({
    borderRadius: "1rem", 
    display: "flex", 
    width: "20rem",  
    marginLeft : "10px",
    marginRight : "10px",
    position: "relative", 
    height: "20rem",
    boxShadow: "1px 1px 20px 1px black",
    overflow: "hidden",
    // border: "1px solid"
});    

const Info = styled("div") ({
    flexDirection : "column" , 
    zIndex : 2,
    position : "absolute" , 
    top : "80%" , 
    left : "50%" ,
    height : "40%", 
    background: "rgba(0, 0, 0, 0.5)",
    transform : "translate(-50%,-50%)" , 
    width : "100%" ,
   display: "flex", 
   justifyContent: "center", 
   alignItems: "center"
})

const ContentImg = styled("img").attrs({alt : '작품 이미지'}) ({
    objectFit : "cover" , 
    width : "100%" , 
    height : "100%" , 
    position : "absolute", 
    zIndex : 1
})

interface ContentTextProps {
    fontSize: string;
    fontWeight: string;
}
  
  const ContentText = styled.div<ContentTextProps> `
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: white;
  `;

export default function CardView(){
    return (
        <StyleCard>
            <ContentImg src='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'/>
            <Info>
            <div style={{marginBottom: "10px", textAlign: "center"}}>
                <ContentText fontSize='16px' fontWeight='300'>CHICKEN</ContentText>
                <ContentText fontSize='16px' fontWeight='600'>OH_MY_GOD</ContentText>
            </div>
            <ContentText fontSize='14px' fontWeight='500'>Perfect for everyone</ContentText>
            </Info>
        </StyleCard>
    );

}
