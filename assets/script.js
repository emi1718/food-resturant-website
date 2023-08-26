var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/////////// Review section 

  let sliders = document.querySelectorAll(".review_container");
  let index = 0;
  
  function next() {
    sliders[index].classList.remove('active');
    index = (index + 1) % sliders.length;
    sliders[index].classList.add('active');
  }
  
  function prev() {
    sliders[index].classList.remove('active');
    index = (index - 1 + sliders.length) % sliders.length;
    sliders[index].classList.add('active');
  }
  

  ////////// menu bar 


  document.getElementById('bar').addEventListener('click',()=>{

    const navbar = document.getElementById('top_navbar');

    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }



  })


  /////////// search 



  document.getElementById('search_icon').addEventListener('click',()=>{

    var search_cont = document.getElementById('search_container');

    if (search_cont.style.display === 'none') {
      search_cont.style.display = 'block';
    } else {
      search_cont.style.display = 'none';
    }



  })


  var dropdowns = document.getElementsByClassName("login");
    
    // Loop through dropdowns and add event listeners
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.getElementsByClassName("dropdown-log")[0];
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }


    // NAVBAR 


    // FOOTER 


    document.getElementById("footer").innerHTML=`    <footer>

    <div class="footer_cont">


        <div class="footer_col">

            <div class="footer_logo">

                <img src="logo.webp" alt="">

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo, aperiam velit ea, dolores illum
                nesciunt fugit dolorum minima ad cupiditate Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Totam, dolorum! </p>
        </div>


        <div class="footer_col1">
            <div class="col">
                <h3>Talk with us</h3>
                <h5>Phone:03172741949</h5>
                <h5>Email:emrankhan123@gmail.com</h5>
                <h5>Support:www.emicodes.com</h5>
            </div>




            <div class="col1">
                <h3>Sitemap</h3>

                <a href="index.html">Home</a>
                <a href="service.html">Service</a>
                <a href="menu/breakfast.html">Menu</a>
                <a href="shop.html">Shop's</a>
                <a href="review.html">Review's</a>
                <a href="feedback.html">Feedback</a>
                <a href="contact.html">Contact</a>

            </div>


            <div class="col1">
                <h3>Keep Connected</h3>

              <div class="icon">
              <a href="#">      <i class="fa-brands fa-facebook"></i> Facebook</a>

               


              
                 <a href="#">   <i class="fa-brands fa-instagram"></i> Instagram</a>

                

              
                  <a href="#" >  <i class="fa-brands fa-youtube"></i> Youtube</a>

              </div>



            </div>

        </div>

        <div class="footer_col3">


            <p style="color: white;">

                © Copyright-2023 emicodes.All rights reserved
            </p>



        </div>






</footer>`