const invitationForm = document.getElementById('invitationForm');
const guestNameSpan = document.getElementById('guestName');
const invitationCard = document.getElementById('invitationCard');
const myVideo = document.getElementById("video1");

function playPause() {
    // saat buttonOnclick kita klik maka otomatis lagu langsung berjalan
    myVideo.play();
}

invitationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const guestName = document.getElementById('name').value;
    if (guestName.trim() !== '') {
        guestNameSpan.textContent = guestName;
        invitationCard.classList.remove('hide');
    }
   

});
