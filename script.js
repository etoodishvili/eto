let togglebutton = document.getElementById ('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');


togglebutton.addEventListener('click',function()    {
    navbarlinks.classList.toggle('active');
})



 $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });