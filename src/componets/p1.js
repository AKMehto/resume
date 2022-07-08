import React from 'react'
import './p1.css'
export default function p1() {

	const rotateElem=()=> {
        
		var value=90;
		var one=document.querySelector('.let1').style.transform;
		var num=Math.floor((Math.random()*6));
		for(var i=0;i<num+50;i++){
			
			if(num<3){
			
				if(num===0)
				value+=180;

				if(num===1)
				value+=90;

				if(num===2)
				value+=270;

				if(num===4){
					value+=360;
					document.querySelector('.container').style.transform="rotateY("+value+"deg)";
				}
				document.querySelector('.container').style.transform="rotateY("+value+"deg)";
			}
            
			else{
			document.querySelector('.container').style.transform="rotateX("+value+"deg)";
			value+=90;
		}
			
			       }

	}



  return (
    <div id="dice">
        <p  >CUBE</p>
<div  onClick={rotateElem} className="container">
	
	<div className="let1">
      <div className="face">
		  <div className="one"></div>
	  </div>
	</div>


	<div className="let2" >
		<div className="face">
			<div className="two " id="two1"></div>
			<div className="two" id="two2"></div>
		</div>
	  </div>


	

	  <div className="let3">
		<div className="face">
			<div className="three" id="three1"></div>
			<div className="three" id="three2"></div>
			<div className="three" id="three3"></div>
		</div>
	  </div>  




	  <div className="let4">
		<div className="face">
			<div className="four" id="four1"></div>
			<div className="four" id="four2"></div>
			<div className="four" id="four3"></div>
			<div className="four" id="four4"></div>
		</div>
	  </div> 

	  <div className="let5">
		<div className="face">
			<div className="five" id="five1"></div>
			<div class="five" id="five2"></div>
			<div className="five" id="five3"></div>
			<div className="five" id="five4"></div>
			<div className="five" id="five5"></div>
		</div>
	  </div>

	  <div className="let6">
		<div className="face">
			<div className="six" id="six1"></div>
			<div className="six" id="six2"></div>
			<div className="six" id="six3"></div>
			<div className="six" id="six4"></div>
			<div className="six" id="six5"></div>
			<div className="six" id="six6"></div>
		</div>
	  </div>
</div>	







    </div>
  )
}
