import 'whatwg-fetch';

export default function requestApi(URL, method){
  return function(body){
    return fetch(URL, {
      credentials: "same-origin",
      method: method || "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(function(response){
      return response.json()
    }).catch(function(ex){
      console.log("Parsing Failed", ex)
    })
  }
}
