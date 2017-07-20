function fnTab(obj,even){
		var oBox=document.getElementById(obj);
		var aLi=oBox.getElementsByClassName('li1');
		var aDiv=oBox.getElementsByClassName('absolute');
		
		for(var i=0;i<aLi.length;i++){
			
			aLi[i].index=i;
			
			aLi[i][even]=function(){
				
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='li1';
					aDiv[i].className='absolute';
				}
				
				this.className='active li1';
//				alert(this.index);
				aDiv[this.index].className='show absolute';	
			};	
		}
	}	
	window.onload=function(){
		fnTab('banner-1','onmouseover');
	};