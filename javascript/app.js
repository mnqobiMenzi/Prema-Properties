const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const toggleDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    toggleDownMenu.classList.toggle('open')
    const isOpen = toggleDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}