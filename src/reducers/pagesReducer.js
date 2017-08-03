export default function reducer(state={
	fetching: false,
	initialized: false,
	user: {name: "", token: ""},
	pages: [{name: "Punch", fan_count: 1, photo: ""},{name: "Punch2", fan_count: 2, photo: ""},{name: "Punch3", fan_count: 3, photo: ""}],
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
			return {...state, fetching: false, initialized: true, user: {name: action.payload.name, token: action.payload.token} }
			
		}
		case "SET_USER_PAGES": {
			return {...state, fetching: false, initialized: true, pages: action.payload }
			
		}
	}
	return state
	
}