function generateJoke() {
  var request= new XMLHttpRequest();
  request.open ('GET', 'https://api.chucknorris.io/jokes/random', true);

  request.onreadystatechange = function () {

  //check for valid response
    if (request.readyState == 4 && request.status == 200) {
      var text = request.responseText;
// parse the json and take out the joke
      var jsonText= JSON.parse(text);
      var joke = jsonText.value;
      document.getElementById('joke'). innerHTML= joke;
    }
  };
  request.send();
}
