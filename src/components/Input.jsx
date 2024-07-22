import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
// import ListItem from "./ListItem"

var gloV, f;

function Input() {

    
    const [item, setItem] = useState();
    const [itemE, setItemE] = useState();
    const [listItems, setList] = useState([]);
    const [show, showF] = useState(0)
    const liStyle = {
    	backgroundColor : "#F3FEB8",
    	marginRight : "3px",
    	fontSize : "23px"
    }

    const deleteStyle = {
        backgroundColor: "#E6B9A6",
        fontColor: "white",
        ":hover": { bgcolor: "red" }
    }

    function handleChange(event) {
        showF(0);
        let data = event.target.value;
        setItem(data);
    }
    function handleChangeE(event) {
        let data = event.target.value;
        setItemE(data);
    }


    function addItem() {
        // console.log("I got clicked");
        setList((prevValues) => [...prevValues, item]);
        setItem('');
    }

    function deleteItem(dI) {
        console.log(dI);
        let deleteArray = [...listItems].filter(x => x != dI);
        // console.log(deleteArray);
        setList(deleteArray);

    }
    function saveFunction (){
      setItemE('');
      showF(0);
      f=0;
      let mirror = [];
      for (var i = 0; i < listItems.length; i++) {
        if(i === gloV)
          mirror.push(itemE);
        else
          mirror.push(listItems[i]);
      }
      setList(mirror);

      // console.log(mirror);
      
      
    }

  function handleEdit(index, item){
      showF(1);
      // console.log("Index" + index);
      f = 1;
      gloV = index;
      setItemE(item);    
      // console.log("I'm gloV" + gloV);
      console.log(itemE); 

  }
    return < >

        { /*<input onChange={handleChange} type="text" id="fname" name="fname" value={item}/>*/ }

    <Container className= "setBackground">

  		<ul style={{listStyleType: "none"}}>
  		{listItems.map((item,index) =>
  			<li style={{margin: "10px"}} >

        {index === gloV && f===1 ? 
          <div>
          <TextField id="standard-basic" onChange={handleChangeE} label="Edit" variant="standard" value={itemE} /> 
            <Button  onClick={saveFunction} sx={{bgcolor: "#9BEC00", ":hover" :{bgcolor: "#06D001"} }}>Save</Button> </div>
          :
          <div>
          <span style ={liStyle}><Paper align="center" elevation={0} sx={{m : "2", bgcolor:"#FFFDB5", display : "inline"}}>🔰 {item}</Paper> </span>
        <Button size="small" onClick={()=>{handleEdit(index, item);}} sx={{bgcolor: "white", ":hover" :{bgcolor: "#CDE8E5"} }}>🖋️</Button>
        <Button  size="small" onClick={()=>deleteItem(item)} sx={deleteStyle}>✖️</Button>
        

          </div>
        }
  			
  			</li>)}
  		</ul>
      <Container sx={{mt: "10px"}}>
        <TextField id="standard-basic" onChange={handleChange} label="Add" variant="standard" value={item} />
  			 <Button type="submit"onClick={addItem} variant="contained" sx={{bgcolor: "#399918", ":hover" :{bgcolor: "#667BC6"}}}>
   			    Add
        </Button>
        </ Container>
        
   	</ Container>
	</>
}

export default Input;
{/*<Container>
 <TextField id="standard-basic" onChange={handleChange} label={button} variant="standard" value={item} />
 <Button  onClick={saveFunction} sx={{bgcolor: "#9BEC00", ":hover" :{bgcolor: "#06D001"} }}>Save</Button>
 </Container>

*/}