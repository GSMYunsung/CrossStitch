import { useNavigate } from 'react-router-dom';
import {GithubAuthProvider , signInWithPopup } from '@firebase/auth';
import {firbase_auth} from '../../firebase'
import { ERROR_CLOSE } from '../../errorType/error'
import Sketch from '@uiw/react-color-sketch';
import { useState } from 'react';

interface ColorPicker {
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({color = "#d0021b" , onChange} : ColorPicker){

  const [hex, setHex] = useState(color);
  return (
    <div>
       <Sketch
        style={{ marginLeft: 20 }}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          onChange(color.hex)
        }}
        />
    </div>
);
}
