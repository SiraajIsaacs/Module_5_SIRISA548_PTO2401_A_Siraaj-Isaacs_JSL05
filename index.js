const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylists(guardians, songs) {
    // Generate playlists for each guardian by mapping through the array and filtering out.
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
        const playlist = songs.filter(song => song.genre === genre);

        return {
            guardian: guardian,
            playlist: playlist
        };
    });

    // Function to display playlists nested in the generatePlaylists function to access the playlists variable.
    function displayPlaylists(playlists) {
        const container = document.getElementById('playlists');

        // Creating a div for the playlist containers and adding the class playlist to the div for each guardian and their playlist.
        playlists.forEach(({ guardian, playlist }) => {
            const guardianDiv = document.createElement('div');
            guardianDiv.classList.add('playlist');

            const guardianName = document.createElement('div');
            guardianName.classList.add('playlist-heading');
            guardianName.textContent = `${guardian}'s Playlist`;
            guardianDiv.appendChild(guardianName);

            // Creating a list for each song with HTML elements and added span to separate the styling for the artist.
            const playlistUl = document.createElement('ul');
            playlist.forEach(song => {
                const songLi = document.createElement('li');

                const songTitle = document.createElement('span');
                songTitle.textContent = song.title;
                songTitle.classList.add('song-title');

                const songArtist = document.createElement('span');
                songArtist.textContent = ` by ${song.artist}`;

                songLi.appendChild(songTitle);
                songLi.appendChild(songArtist);

                playlistUl.appendChild(songLi);
            });
            guardianDiv.appendChild(playlistUl);
            container.appendChild(guardianDiv);
        });
    }

    // Call the function displayPlaylists to display the generated playlists
    displayPlaylists(playlists);
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylists(guardians, songs);



