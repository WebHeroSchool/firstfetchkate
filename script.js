
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
					document.body.append(photo);
			
					let name  = document.createElement('a');
					if (json.name != null) {
						name.innerHTML = json.name;
					} else {
						name.innerHTML = ;
					}
					document.body.append(name);
					/*name.addEventListener("click", () => window.location = 'https://webheroschool.github.io/katerinaSaranM/');*/
			
					let bio = document.createElement('p');
					if (json.bio != null) {
						bio.innerHTML = json.bio;
					} else {
						bio.innerHTML = ;
					}
					document.body.append(bio);
			
				})
				.catch(err => alert('_'));
			