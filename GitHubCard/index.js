/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/jeremyRogel')
  .then(response => {
    console.log(response, 'data from my API')
    cards.appendChild(createComponent(response.data));
  })
.catch(error => console.log(error));

axios.get('https://api.github.com/users/jeremyRogel/followers')
  .then(response => {
  console.log(response, 'data from followers API')
  response.data.forEach(user => {
    axios.get(`https://api.github.com/users/${user.login}`) 
    .then(response => {
      cards.appendChild(createComponent(response.data))
    })
    
  })
  });


const cards = document.querySelector('.cards')
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/



function createComponent(obj) {
  //defining elements
  const card = document.createElement('card');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('card-info')
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('username');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

//setting up the structure
card.appendChild(cardImage);
card.appendChild(cardInfo);
cardInfo.appendChild(cardName);
cardInfo.appendChild(cardUsername);
cardInfo.appendChild(cardLocation);
cardInfo.appendChild(cardProfile);
cardInfo.appendChild(cardFollowers);
cardInfo.appendChild(cardFollowing);
cardInfo.appendChild(cardBio);

//setting up the class names
card.classList.add('card');
cardInfo.classList.add('card-info');
cardName.classList.add('name');
cardUsername.classList.add('username');
cardImage.src = obj['avatar_url'];



cardName.textContent = obj.name;
cardUsername.textContent = obj.login;
cardLocation.textContent = obj.location;
cardProfile.setAttribute('href', obj.html_url)
cardProfile.textContent = 'Github';
cardFollowers.textContent = 'Followers:' + obj.followers;
cardFollowing.textContent = 'Following:' + obj.following;
cardBio.textContent = obj.bio;

return card
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
