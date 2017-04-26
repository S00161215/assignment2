"use strict";
// JavaScript Document
 
  //document.getElementById('logo').addEventListener('mouseover',listen,false);
// function listen()
// {
//	 console.log('done');
// }
$('#ire').mouseover(function(){
		//$(this).css('opacity',0.15).css('background-color','#0BC521');
		console.log('done');
		
		var x = document.createElement('div');
		
		x.style.width = 198;
		x.style.height = 132;
		
		x.style.backgroundColor = "green";
		
		 $(this).parent().appendChild(x);
		console.log(parent);
		
		});