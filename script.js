var galleryRow = document.getElementById('gallery-row');
var teamRow = document.getElementById('team-row');



(async () => {
    await createTeams();
    await createGallery();
})();



async function createGallery() {
    var galleryData = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=12')
        .then(response => response.json())

    var photos = galleryData.photos;
    // console.log(photos);

    photos.forEach((item) => {
        var galleryCol = document.createElement('div');
        galleryCol.classList.add('col-md-3');
        galleryCol.classList.add('py-3');

        var galleryImg = document.createElement('img');
        galleryImg.src = item.url;

        galleryCol.appendChild(galleryImg);
        galleryRow.appendChild(galleryCol);
    });
};



async function createTeams() {
    var teamData = await fetch('https://dummyjson.com/users?limit=8')
        .then(response => response.json())

    var teams = teamData.users  ;
    // console.log(teams);

    teams.forEach((item) => {

        var teamCol = document.createElement('div');
        teamCol.classList.add('col-md-4');
        teamCol.classList.add('py-3');

        var teamCard = document.createElement('div');
        teamCard.classList.add('card');

        var teamImg = document.createElement('img');
        teamImg.src = item.image;
        teamImg.classList.add('card-img-top');

        var teamCardBody = document.createElement('div');
        teamCardBody.classList.add('card-body');

        var teamCardTitle = document.createElement('h5');
        teamCardTitle.classList.add('card-title');
        teamCardTitle.innerHTML = item.firstName + ' ' + item.lastName;

        var teamCardText = document.createElement('span');
        teamCardText.classList.add('text-card');
        teamCardText.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

        teamCardBody.appendChild(teamCardTitle);
        teamCardBody.appendChild(teamCardText);

        teamCard.appendChild(teamImg);
        teamCard.appendChild(teamCardBody);

        teamCol.appendChild(teamCard);
        teamRow.appendChild(teamCol);
    });
}