import axios from 'axios';

export function setUserName(name) {
	
	return (dispatch) => {
		dispatch({
			type: "SET_USER_NAME",
			payload: {name: name.name,
			token: name.accessToken},
		})
			axios.get(`https://graph.facebook.com/me/accounts?access_token=${name.accessToken}&fields=name,picture,fan_count,id`)
			.then((response) => {
			  console.log(response.data.data[0].picture.data.url)
				dispatch({
			type: "SET_USER_PAGES",
			payload: response.data.data
		})
			})
		 

		
	}
}


