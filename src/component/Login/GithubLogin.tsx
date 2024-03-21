import { useNavigate } from 'react-router-dom';
import {GithubAuthProvider , signInWithPopup , getAuth} from '@firebase/auth';
import {firbase_auth} from '../../firebase'
import { ERROR_CLOSE } from '../../errorType/error'
import React from 'react';

export default function GithubLogin(){
    const navigate = useNavigate();
    
    const handleGithubLogin = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(firbase_auth , provider);
            const user = result.user;

            alert(JSON.stringify(user));
            navigate('/');
        } catch (error) { 
            if(ERROR_CLOSE === String(error)) return alert("사용자가 팝업창을 닫았습니다.")
            else alert(error); 
            } }

    return (
        <div>
            <button onClick={handleGithubLogin}>Login with Github</button>
        </div>
    );
}
