import { useNavigate } from 'react-router-dom';
import {GithubAuthProvider , signInWithPopup , getAuth} from '@firebase/auth';
import {firbase_auth} from '../../firebase'
import { ERROR_CLOSE } from '../../errorType/error'
import React from 'react';
import Button from '@mui/material/Button';
import CardView from '../Card/CardView';
import CrossBoard from '../Cross/CrossBoard';
import ScrollBanner from '../Card/ScrollBanner';

export default function GithubLogin(){
    const navigate = useNavigate();
    
    const handleGithubLogin = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(firbase_auth , provider);
            const user = result.user;

            console.log(JSON.stringify(user));
            navigate('/Main');
        } catch (error) { 
            if(ERROR_CLOSE === String(error)) return alert("사용자가 팝업창을 닫았습니다.")
            else alert(error); 
            } }

    return (
        <div>
            <div style={{display : "flex" , flexDirection : "row"}}>
                <div style={{fontSize : "100px",textAlign:"left" , position : "absolute" , left : 40 , top : 40}}>Steadily_<br/>Git__<br/>Jasu___</div>
                <div style={{position : "absolute" , right : 40, top : 40}}>
                    <CrossBoard isColorPicker={false}/>
                </div>
            </div>
            <Button variant="outlined" color="inherit" style={{color : "black" ,position : "absolute" , top : "50%" , left : "40%"}} onClick={()=>handleGithubLogin()} startIcon={<img style={{width : "30px" , height : "30px"}} src='../../img/github_logo.png'/>}>Login with Github</Button>
            <div style={{position : "absolute" , bottom : 0 , width : "100%"}}>
                <ScrollBanner/>
            </div>
        </div>
    );
}
