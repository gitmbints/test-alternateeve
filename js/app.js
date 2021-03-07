/*  
 * ***** Sidenav mobile animation *****
*/
const mobileLayout = document.querySelector('.alt-mobile');
const hamburger = document.querySelector('.alt-mobile-hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('alt-active');
  mobileLayout.classList.toggle('alt-show');

  if (mobileLayout.classList.contains('alt-show')) {
    mobileLayout.parentNode.style.overflow = 'hidden';
  } else {
    mobileLayout.parentNode.style.overflow = 'auto';
  }
});

/*  
 * ***** Sidenav mobile animation *****
*/

/*
 * ***** Dropdown animation *****
*/
const btnDrops = document.querySelectorAll('.alt-mobile-dropdown-top');
let toggleIndex = 0;

/* Bug Encore */

for (let i = 0; i < btnDrops.length; i++) {
  btnDrops[i].addEventListener('click', () => {
    const dropDown = btnDrops[i].parentElement;
    const arrow = btnDrops[i].childNodes[3];
    if (toggleIndex === 0) {
      dropDown.style.height = `${dropDown.scrollHeight}px`;
      arrow.style.transform = 'rotate(90deg)';
      toggleIndex++;
    } else {
      dropDown.style.height = `${btnDrops[i].scrollHeight}px`;
      arrow.style.transform = 'rotate(0)';
      toggleIndex--;
    }
  });
}
/*  
 * ***** Dropdown animation *****
*/



