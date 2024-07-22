import React, {useState} from "react";


function  ListItem(props){

	let [line,setLine] =  useState(0);

	function lineUp(){
		line ? setLine(0) : setLine(1);
		console.log(line);
	}
	return <>
		<li style={{textDecoration: line ? "line-through white" : "none", cursor:"pointer"}} onClick={lineUp} >
		{props.Item}</li>
		</>
};

export default ListItem; 