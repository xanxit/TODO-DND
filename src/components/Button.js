import React,{useState} from 'react'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card';
import TextArea from 'react-textarea-autosize';
import Add from '@material-ui/core/Button';
import { connect, useDispatch } from 'react-redux';
import {addList} from '../actions';
// const dispatch = useDispatch() ;

function Button({lists}) {
    const [state,setState]=useState(false)
    const [text,setText]=useState({});
    const buttonOpacity= lists?1:0.5;
    const buttonTextColor=lists?"white":"inherit";
    const buttonTextBG=lists?"rgba(0,0,0,0.15)":"inherit";
    // function openForm(){
    //     setState(true);
        
    // }
    const placeholder= lists?"Enter title for your List":"Enter title for your task";
    const buttonText=lists?"Add List":"Add Task";
    const dispatch = useDispatch() ;
    const listHandler=() =>{
        // e.preventDefault();
dispatch (addList(text)) ;
    }

    const addButton=()=>
    (
        <div onClick={()=>setState(true)} style={{...style.button ,backgroundColor:buttonTextBG,opacity:buttonOpacity,color:buttonTextColor} }>
        <Icon>add</Icon>
        <p>{buttonText}</p>
    </div>
    )


    const formRender =()=>(
        <div>
            <Card style={{
                minHeight:85,
                minWidth:272,
                padding:"6px 8px 2px"
            }}>
                <TextArea placeholder={placeholder} 
                autoFocus
                onBlur={()=>setState(false)}
                onChange={(e)=>setText({text:e.target.value})}
                style={
                        {
                            resize:"none",
                            width:'100%',
                            outline:"none",
                            border:"none",
                            overflow:"hidden"
                        }
                }/>
            </Card>
            <div>
                <Add onMouseDown={listHandler()} variant="contained" style={{color:"white", backgroundColor:"black"}}>{buttonText}</Add>
                <Icon style={{marginTop:10,marginLeft:8,width:100, marginBottom: 1,cursor: "pointer"}}>delete</Icon>
            </div>
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


export default connect ()(Button);
