
function apparaitreCommentaire(){
  document.querySelector('.rejoignez-text-bloc').classList.toggle('rejoignez-text-bloc')
}

document.querySelector('.rejoignez-text-bloc').addEventListener('mouseover', function() {
  document.querySelector('.commentaire').classList.toggle('rejoignez-text-bloc');
});
