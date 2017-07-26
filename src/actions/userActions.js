import axios from 'axios';

export function setUserName(name) {
	
	return {
		type: "SET_USER_NAME",
		payload: {name: name.name, token: name.accessToken},
	}
}

export function getPages(token) { 
	return function(dispatch) {
		let pagesArray = [];
		axios.get(`https://graph.facebook.com/me/accounts?access_token=${token}`)
		.then((response) => {

			dispatch({type: "GET_USER_PAGES", payload: response.data.data.map((val) =>{pagesArray.push(val.name)})})
			console.log("WS");
			


		})
		.catch((error) => {console.log(error)})
		

	}
}

