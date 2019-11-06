/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/cmruss")
    .then(response => {
        console.log(response);
        createFollowerCard(response);
    })
    .catch(error => {
        console.log(`data not returned`, error);
    })
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

const followersArray = ['spencer-mcguire', 'taterntots', 'wsu718', 'AJWD92', 'bseverino'];

//const followersUrl = "https://api.github.com/users/cmruss/followers";

followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
        .then((response) => {

            createFollowerCard(response);

        })
        .catch(error => {
            console.log(`data not returned`, error);
        })
})

window.addEventListener('load', () => {});
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
function createFollowerCard(follower) {
    const card = document.createElement('div'),
        img = document.createElement('img'),
        info = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        link = document.createElement('a'),
        followerCount = document.createElement('p'),
        followingCount = document.createElement('p'),
        bio = document.createElement('p');

    card.classList.add('card')
    info.classList.add('card-info')
    name.classList.add('name')
    username.classList.add('username')

    img.src = follower.data.avatar_url;
    name.textContent = `${follower.data.name}`;
    username.textContent = `${follower.data.login}`;
    location.textContent = `Location: ${follower.data.location}`;
    profile.textContent = `Profile: `;
    link.textContent = `${follower.data.html_url}`;
    link.setAttribute('href', follower.data.html_url);
    followerCount.textContent = `Followers: ${follower.data.followers}`;
    followingCount.textContent = `Following: ${follower.data.following}`;
    document.querySelector('.cards').appendChild(card)
    card.appendChild(img)
    card.appendChild(info)
    info.appendChild(name)
    info.appendChild(username)
    info.appendChild(location)
    info.appendChild(profile)
    profile.appendChild(link)
    info.appendChild(followerCount)
    info.appendChild(followingCount)
    info.appendChild(bio)

    return follower;

}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/