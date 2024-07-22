import React from "react";
import Button from '@mui/material/Button';


const hover = {
	":hover" : {bgcolor: "red"},
};
function Btn(){
	return(
		 <Button variant="outlined" sx = {hover} align="center" size="small">Contained</Button>
		);
};

export default Btn