function toast(type,msg){
  let toast = `<div class="dfToast alert alert-${type} alert-dismissible fade show" role="alert">
    <div>${msg}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  $('.container').append(toast);
  setTimeout(() => {
    $('.dfToast').remove();
  }, 2000);
}