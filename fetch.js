fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    let joke = data.value;
    console.log(joke);
  })
  .catch((err) => {
    console.log(err);
  });

function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      let joke = data.value;
      console.log(joke);
    })
    .catch((err) => {
      console.log(err);
    });
}
