window.fbAsyncInit = function() {
  FB.init({
    appId      : '451877625189079',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
  
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    //setElements(true);
    
    console.log(response);
    //createList();
    
  } else {
    
    console.log('Not authenticated');
  }


}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

f/*unction createList() {
  var pagesArray = [];

  FB.api('/me', 'get', function(response) {
      document.getElementById('target').innerHTML = 'Hola, ' + response.name.split(' ')[0] + '\n Estas son tus páginas:';

      
    });
//'/' + response.data[i].id + '/insights/page_fans'
    FB.api('/me/accounts', 'get', function(response) {

        function getLikes(value) {
            FB.api('/' + response.data[value].id + '/insights/page_fans', 'get', function(r) {
                     
                    pagesArray[value].likes = r.data[0].values[0].value;
                    var node = document.createElement("LI");                 
                     var textnode = document.createTextNode(pagesArray[value].name + '\n\nLIKES: ' + pagesArray[value].likes);        
                    node.appendChild(textnode);                              
                   document.getElementById("pages").appendChild(node);
                });
        }
          
      for(i=0; i < response.data.length; i++) {
        pagesArray.push({});
        getLikes(i);
        pagesArray[i].name = response.data[i].name;
        
        
        
        
           

      };
      
    });


}*/

