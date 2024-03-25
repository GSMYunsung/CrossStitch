import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';
import Sketch from '../ColorPicker/ColorPicker';

export default function CrossBoard({isColorPicker} : any ){
    const navigate = useNavigate();

    const initialGridState = Array.from({ length: 20 }, () =>
    Array.from({ length: 20 }, () => ({ color: '', isChecked: false }))
    );

    const [clicked, setClicked] = React.useState(initialGridState);
    const [color , setColor] = React.useState('#30A14E');

    const handleClick = (x : any, y : any) => {
        // 클릭된 아이템의 상태 업데이트
        
        const newClicked = clicked.map((row, rowIndex) =>
        rowIndex === x
          ? row.map((item, itemIndex) =>
              itemIndex === y ? { ...item, isChecked: true, color: color ? color : "white" } : item
            )
          : row
      );

        console.log(newClicked);

        setClicked(newClicked);
      };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        textAlign: 'center',
        marginRight : theme.spacing(2),
        margin : 1,
        borderRadius: "2px",
        width: "15px",
        height: "15px",
        color: theme.palette.text.secondary,
      }));

    return (
        <div style={{display : 'flex' , flexDirection : 'row'}}>
        <Box>
          {Array.from(Array(20)).map((_, x) => (
            <Grid container>
              {Array.from(
                Array.from(Array(20)).map((_, y) => (
                  <Item style={{background : clicked[x][y].isChecked ? clicked[x][y].color : "white"}} onClick={()=>{handleClick(x , y)}}>
                  </Item>
                ))
              )}
            </Grid>
          ))}
        </Box>
        
        <div style={{display : isColorPicker ? "flex" : "none"}}>

          <Sketch color={"#30A14E"} onChange={function (color: string): void {
            setColor(color);
          } }/>

        </div>

       
      </div>
    
    );
}
