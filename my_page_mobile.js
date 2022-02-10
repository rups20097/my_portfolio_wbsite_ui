$(document).ready(() => {
  if ($(window).width() < 768) {
    console.log("THIS");
    let x = `<div class="" class="col-xs-12 col-md-6" style="margin-top: 200px;">
                <img style="width: 100%; border-radius: 20px;" src="./images/me_laptop.JPEG">
            </div>
            <div class="img_margin" class="col-xs-12 col-md-6" style="margin-top: 200px;">
            <div style="font-size: 30px;" class="m_b_20">Hello folks,</div>
            <p class="m_b_20">
                I am a passionate worker. Whether its an art or my hobbies or maybe its a development, I give my best.
                I believe, <br/>
                <p class="quoted">an Artist always try to make things perfect.</p><br/> Its their virtue. Thus according to them mistakes should be tending to zero for any particular work.
                Thats the golden rule I follow in every work.
                I don't develop because its my job or I have to, but I Love to.
                I have my dreams my passions my goals with developments and I am always excited about it. Thus I never feel saturated in working.
            </p>
            <a target="_blank" href="./files/CV_2020.pdf" download>    
                <button id="download_cv" class="cv_btn">Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.674" height="16.762" viewBox="0 0 15.674 16.762">
                        <path id="download" d="M6.98,18H20.694a.887.887,0,1,1,0,1.764H6.98A.887.887,0,1,1,6.98,18Zm7.837-5.139L17.993,10l1.385,1.247-5.541,4.991L8.295,11.246,9.68,10l3.177,2.861V3h1.959v9.859Z" transform="translate(-6 -3)" fill="#fff" fill-rule="evenodd"/>
                    </svg>                                  
                </button>
            </a>
        </div>`;
    $("#me_laptop_img_box").html(x);
  }
});
