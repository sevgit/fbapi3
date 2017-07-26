import FBstuff from './FBstuff';

export function pagesFetcher() {
	let pagesArray = [];

	FB.api('/me/accounts', 'get', (response) => {

		function getLikes(val) {
			FB.api(`/${response.data[val].id}/insights/page_fans`, 'get', (r) => {
				pagesArray[val].likes = r.data[0].values[0].value;
			})
		}
		for(let i=0; i < response.data.length; i++) {
        pagesArray.push({});
        getLikes(i);
        pagesArray[i].name = response.data[i].name;
      };
	});
}

