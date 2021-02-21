// $(window).resize(() => {
//     let x = $(window).width();
//     if (x < 500) {
//         $('#change_view_for_mobile').removeClass('col-6')
//         $('#change_view_for_mobile').addClass('col-12')
//     } else {
//         $('#change_view_for_mobile').removeClass('col-12')
//         $('#change_view_for_mobile').addClass('col-6')
//     }
// });
$( document ).ready(() => {
    if ($(window).width() < 768) {
        console.log('THIS')
        let x = 
            `<div class="" class="col-xs-12 col-md-6" style="margin-top: 200px;">
                <img style="width: 100%; border-radius: 20px;" src="./images/me_laptop.JPEG">
            </div>
            <div class="img_margin" class="col-xs-12 col-md-6" style="margin-top: 200px;">
            <div style="font-size: 30px;" class="m_b_20">Hello folks,</div>
            <p class="m_b_20 font_w_light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a target="_blank" href="./files/CV_2020.pdf" download>    
                <button id="download_cv" class="cv_btn">Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.674" height="16.762" viewBox="0 0 15.674 16.762">
                        <path id="download" d="M6.98,18H20.694a.887.887,0,1,1,0,1.764H6.98A.887.887,0,1,1,6.98,18Zm7.837-5.139L17.993,10l1.385,1.247-5.541,4.991L8.295,11.246,9.68,10l3.177,2.861V3h1.959v9.859Z" transform="translate(-6 -3)" fill="#fff" fill-rule="evenodd"/>
                    </svg>                                  
                </button>
            </a>
        </div>`;
        $('#me_laptop_img_box').html(x)
    }
})