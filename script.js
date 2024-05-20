
// Fungsi untuk mengambil data restoran dari API
function fetchData() {
    fetch('https://culinarix-content-based1-co3gy5reza-as.a.run.app/top-rated')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'SUCCESS') {
                const topRatedPlaces = data.top_rated_places;
                const cardContainer = document.getElementById('top-rated-list');
            
                // Loop melalui setiap restoran dan membuat card
                topRatedPlaces.forEach(place => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.innerHTML = `
                                <div> 
                                <div><img src="${place.Image_Address}" alt="${place.Place_Name}">
                                <br><a href="${place.Gmaps_Address}";>
                                <strong style="text-align: center; display: block; font-weight: bold;">${place.Place_Name}</strong>
                                </a><br>
                                    <p style="text-align: center">Deskripsi : </p>
                                    <p style="text-align: Justify">${place.Description}</p></p>
                                </div><br><p style="text-align: left;">Kategori : ${place.Category}<br>
                                Rating : ${place.Culinary_Ratings}<br></p></div>
                                <div class="gmaps gmaps-con">
                                <a href="${place.Gmaps_Address}" class="gmaps-btn" style="text-align: center; display: block; bottom: 10px; position: flex;   color: #fff;                        
                                border-radius: 8px; padding: 10px ;   
                                text-decoration: none;
                                ">Google Maps</a></div>
                    `;
                    cardContainer.appendChild(card);
                });
            } 
            
             else {
                console.error('Gagal mengambil data:', data.message);
            }
        })
        .catch(error => {
            console.error('Kesalahan saat mengambil data:', error);
        });
}

// Panggil fungsi fetchData saat halaman dimuat
window.onload = function() {
    fetchData();
};
