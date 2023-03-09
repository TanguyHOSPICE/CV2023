let menu_visible = false;
let menu = document.getElementById('nav');
let burger = document.querySelector('.nav-burger');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	if (menu_visible == false) {
		menu.style.display = 'block';
		menu_visible = true;
	} else {
		menu.style.display = 'none';
		menu_visible = false;
	}
});
