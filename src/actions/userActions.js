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
			   
				//Sort by # of likes
				const sortPages = response.data.data.sort((a,b) => {
					return b.fan_count - a.fan_count
				})




				dispatch({
			type: "SET_USER_PAGES",
			payload: sortPages
		})
			})
			.catch((err) => {
				dispatch({
					type: "SET_USER_PAGES_ERROR",
					payload: err,
				})
			})
		 

		
	}
}


