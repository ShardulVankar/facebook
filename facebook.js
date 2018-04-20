$(document).ready(function(){
	getAllData();
	feed();
	getDataFunction();
	
	
});

function getAllData(){
	
	/* $.ajax({
		type:'get',
		dataType:'json',
		url:'https://graph.facebook.com/me?fields=id,name,picture,email,address,cover,age_range,last_name,accounts,religion,feed&access_token=EAACEdEose0cBAEqUwj5FK1BNHeZBTVaULv3dgNXeuCDkD3BMFVZAQtaNDlqI0Hy8emjZB2NYpMs7J3WhYOiXei9PMKqz40OwtDDd3azF3altwvZASU1wznCIyaCmUSKZBK3BgdjZBOipFnZAep2g5jFUsaTrh09goeQxPmZBvTjBn5yMkzvfo915aFPnjQ0DMb68PYrhIEsg7QZDZD',
		success:(data)=>{
			let temp = `
							${data.name}
						`
						
					$('.name').append(temp);
		},
		
		error:(data)=>{
			console.log("error");
		}, */
		
		/* beforeSend:(data1)=>{
			alert("Fetching data please wait");
		},
		
		complete:(data2)=>{
			alert("Data fetching completed");
		}, */
		
		timeout:3000 // time is in miliseconds.... Note: not to use semicolon or it will give error: Uncaught SyntaxError: Unexpected token ;
	
	/* }) */
}

function feed(){
	
	$.ajax({
		type:'get',
		/* dataType:'json',
		url:'https://graph.facebook.com/me?fields=id,name,picture,email,address,cover,age_range,last_name,accounts,religion,feed&access_token=EAACEdEose0cBAEqUwj5FK1BNHeZBTVaULv3dgNXeuCDkD3BMFVZAQtaNDlqI0Hy8emjZB2NYpMs7J3WhYOiXei9PMKqz40OwtDDd3azF3altwvZASU1wznCIyaCmUSKZBK3BgdjZBOipFnZAep2g5jFUsaTrh09goeQxPmZBvTjBn5yMkzvfo915aFPnjQ0DMb68PYrhIEsg7QZDZD',
		success:(getData)=>{
			let input =getData.feed;
			for(d1 of input.data){ */
			/* 	console.log(d1); */
			/* 
				let tempRow = 	`<div class="row">
										<div class="col">${d1.message}</div>
										<div class="col">${d1.story}</div>
										<div class="col">${d1.created_time}</div>
										<div class="col">${d1.id}</div>
								</div>`
								
				console.log(tempRow);
				$('.feeds').append(tempRow);
				
			}
			
		},
		
		timeout:3000 */
	})
}

function getDataFunction(){
	$.ajax({
		type:'get',
		dataType:'json',
		async:true,
		url:'https://graph.facebook.com/me?fields=id,name,picture,email,address,cover,age_range,last_name,accounts,religion,hometown,quotes,albums{photos{picture}},permissions&access_token=EAACEdEose0cBAMXwkTrX6UOnW6cMx37Hge77YdnMN8uyKAuSwoHJk0MMuZAVTVuPSRnbYjOxD0OqZBrKx10pwhpnMZCUXsl6JZCAB7PFgUm0AaZCaifZACyCHii5UxMn5aVHoprJmDIfLlaah7IYdbDTwSLZCIZBKKFeZCpaSBnKBZCmSuN5B6veK6FZABcpIeCcYAKOG51x99HHQZDZD',
		success:(data1)=>{
			let coverPic = `${data1.cover.source}`//semicolon must not be used.
			$('.coverPic').html('<img src="' + coverPic + '" style="height:100%;width:100%;border:1px solid">');
			
			let profilePic = `${data1.picture.data.url}`//semicolon must not be used.
			$('.profilePic').html('<img src="' + profilePic + '" style="height:100%;width:100%;border:solid;border-color:white">');
			
			let name = `${data1.name}`
			$('.name').append(name);
			
			let gender = `${data1.gender}`
			$('.gender').append(gender);
			
			let hometown = `${data1.hometown.name}`
			$('.hometown').append(hometown);
			
			let email = `${data1.email}`
			$('.email').append(email);
			
			let quotes1 = `${data1.quotes}`
			$('.quote').append(quotes1);
			
			
		 	 for(i in data1.albums.data){
				
 				for(j in data1.albums.data[i].photos.data){
					
					let url1 = `${data1.albums.data[i].photos.data[j].picture}`
					
						$('.albumPics').append($('<img>').attr({'src':url1,'style':'border:solid white','width':'100px','height':'100px'}));
																											//for fetching multiple images we have to use
																											//attr rather than html element.html element wont work in loops. It will
																											//replace images and put last image as output.
				}		
			}
			
			
		}



	})
}