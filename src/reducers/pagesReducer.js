export default function reducer(state={
	fetching: false,
	initialized: false,
	user: {name: "", token: ""},
	pages: [],
	error: null,
}, action) {

	switch(action.type){
		case "FETCH_PAGES_START": {
			return {...state, fetching:true}
			
		}
		case "FETCH_PAGES_ERROR": {
			return {...state, fetching: false, error: action.payload}
			
		}
		case "SET_USER_NAME": {
			return {...state, fetching: false, initialized: false, user: {name: action.payload.name, token: action.payload.token} }
			
		}
		case "SET_USER_PAGES": {
			return {...state, fetching: false, initialized: true, pages: action.payload }
			
		}
	}
	return state
	
}