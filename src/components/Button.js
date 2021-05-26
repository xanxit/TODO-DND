import React,{useState} from 'react'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card';
import TextArea from 'react-textarea-autosize';
import Add from '@material-ui/core/Button';
import { connect, useDispatch } from 'react-redux';
import {addList,addCard} from '../actions';
// const dispatch = useDispatch() ;

function Button({lists,listID}) {
    const [state,setState]=useState(false)
    const [text,setText]=useState("");
    const buttonOpacity= lists?1:0.5;
    const buttonTextColor=lists?"white":"inherit";
    const buttonTextBG=lists?"rgba(0,0,0,0.15)":"inherit";
    // function openForm(){
    //     setState(true);
        
    
    
    const placeholder= lists?"Enter title for your List":"Enter title for your task";
    const buttonText=lists?"Add List":"Add Task";
    const dispatch = useDispatch() ;
    const listHandler=() =>{
        // e.preventDefault();
        if(text){
            console.log("call")
            setText("")
        dispatch(addList(text)) ;
        
}
    }
    const cardHandler=() =>{
        // e.preventDefault();
        if(text){
            console.log("call2")
            setText("") 
        dispatch(addCard(listID,text));
}
    }   

    const addButton=()=>
    (
        <div onClick={()=>setState(true)} style={{...style.button ,backgroundColor:buttonTextBG,opacity:buttonOpacity,color:buttonTextColor} }>
        <Icon>add</Icon>
        <p>{placeholder}</p>
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
                onChange={(e)=>setText(e.target.value)}
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
                <Add onMouseDown={listID===undefined?listHandler:cardHandler} variant="contained" style={{color:"white", backgroundColor:"black"}}>{buttonText}</Add>
                <Icon style={{marginTop:10,marginLeft:8,width:100, marginBottom: 1,cursor: "pointer"}}>delete</Icon>
            </div>
        </div>
        )
        // console.log(text);
     
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
