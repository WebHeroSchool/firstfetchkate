//fetch("https://api.github.com/users/katerinaSaranM").then(answer => answer.json()).then(data => console.log(data))


/*var searchParams = new URLSearchParams(window.location.search);
	if (searchParams.has('users') && userName !== undefined) {
var userName = searchParams.get('users');

fetch("https://api.github.com/users/'katerinaSaranM")
	.then(res => res.json())
	.then(json => {
		if (json.message == "Not Found") {
			var div = document.createElement('div');
			document.body.appendChild(div);
			div.innerText = "Информация о пользователе не доступна"; 
		} else {
			//	div.innerHTML = json.avatar_url, json.name, json.bio, json.url

			var h1 = document.createElement('h1');
			document.body.appendChild(h1);
			h1.innerHTML = 'katerinaSaranM';

			var div = document.createElement('div');
			document.body.appendChild(div);
			div.innerHTML = 'katerinaSaranM';

			var a = document.createElement('a');
			document.body.appendChild(a);
			a.innerHTML = 'null';
			a.href = 'https://github.com/katerinaSaranM';

			var img = document.createElement('img');
			document.body.appendChild(img);
			img.src = "https://avatars.githubusercontent.com/u/57642189?v=4";
		}
	})
} else {
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.innerText = "https://api.github.com/users/'katerinaSaranM"; 
}
*/
		//	.catch(function(error) { 
			//	console.log(error); });

			/*fetch("https://api.github.com/users/katerinaSaranM")
			.then(res => res.json())
			.then(json => {
				console.log(json.avatar_url);
			})
			.then(res => res.json())
			.then( => {
				console.log(json.bio);
			})*/
			let body = document.body;
			let url = window.location.toString();
			
			const getNameFromUrl = (url) => {
			  let getUrl = url.split('=');
			  let name = getUrl[1]; //
			  if(name == undefined) {
			  name = 'katerinaSaranM';
			  }
			return name;
			}
			
			fetch(`https://api.github.com/users/${getNameFromUrl(url)}`)
				.then(res => res.json())
				.then(json => {
					console.log(json.avatar_url);
					console.log(json.name);
					console.log(json.bio);
					console.log(json.html_url);
			
					let photo = new Image();
					photo.src = json.avatar_url;
					body.append(photo);
			
					let name = document.createElement('p');
					if (json.name != null) {
						name.innerHTML = json.name;
					} else {
						name.innerHTML = '_';
					}
					body.append(name);
					name.addEventListener("click", () => window.location = 'https://webheroschool.github.io/katerinaSaranM/');
			
					let bio = document.createElement('p');
					if (json.bio != null) {
						bio.innerHTML = json.bio;
					} else {
						bio.innerHTML = '_';
					}
					body.append(bio);
			
				})
				.catch(err => alert('_'));
			