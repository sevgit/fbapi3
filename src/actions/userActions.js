import axios from 'axios';

export function setUserName(name) {
	
	return (dispatch) => {
		dispatch({
			type: "SET_USER_NAME",
			payload: {name: name.name,
			token: name.accessToken},
		})
		
		return dispatch({
			type: "SET_USER_NAME",
			payload: {
				name: "?",
				token: "?"
			}
		})

		
	}
}

export function getPages(token) { 
	
	return (dispatch) => {
		const fetchPages = axios.get(`https://graph.facebook.com/me/accounts?access_token=${token}&fields=name,id`);
		fetchPages.then( (response) => {
		console.log(response.data.data);
	})
	}
	
}

//axios.get(`https://graph.facebook.com/me/accounts?access_token=${token}`)