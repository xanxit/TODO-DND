import React,{useState} from 'react'
import Icon from '@material-ui/core/Icon'
import Card from './Card'
function Button({lists}) {
    const [state,setState]=useState(false)
    const buttonText= lists?"Add a List":"Add a card";
    const buttonOpacity= lists?1:0.5;
    const buttonTextColor=lists?"white":"inherit";
    const buttonTextBG=lists?"rgba(0,0,0,0.15)":"inherit";
    // function openForm(){
    //     setState(true);
        
    // }
    console.log(state);
    const addButton=()=>
    (
        <div onClick={()=>setState(true)} style={{...style.button ,backgroundColor:buttonTextBG,opacity:buttonOpacity,color:buttonTextColor} }>
        <Icon>add</Icon>
        <p>{buttonText}</p>
    </div>
    )
    console.log(state);

    const formRender =()=>(
        <div>
            <Card description="Add your Task"/>
        </div>
        )
return (state?
formRender()
    :
addButton()
)
}
const style={
    button:{
        alignItems:"center",
        display:"flex",
        cursor:"pointer",
        borderRadius:3,
        height:36,
        width:272,
        paddingLeft:8
        
    }
}


export default Button
