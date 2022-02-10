function getEmployeesWord() {
    console.log('YES')
    let arr = [
        {
            quote: "Rupam has always been very dedicated towards his work. His work-first and (customer/client)-first attitude is super positive for any organization. His independent work ability is great and is also a good team player.",
            name: "<a style='font-size: 18px; font-weight: bold; color: #2a91ff' target='_blank' href='https://www.linkedin.com/in/pritam-roy/'>Pritam Roy</a>",
            designation: "Solution Engineer",
            company: "Instabase",
            src: "./images/pritamroy.jpg",
            color:"#A25670"
        },{
            quote: "I am pleased to work with you. You have such a great talent. Never let it fade away. Keep shining.",
            name:"<a style='font-size: 18px; font-weight: bold; color: #2a91ff' target='_blank' href='https://www.linkedin.com/in//sayan-dutta-bbb9a9191/'>Sayan Dutta</a>",
            designation: "Business Partner",
            company: "Read24hrs",
            src: "./images/sayandutta.jpg",
            color:"#A25656"
        },{
            quote: "Super talented, hardworking fellow... self motivated,always chasing his passion.Keep ur enthu as it is  and enjoy ur life to the best",
            designation: "Advanced Analyst",
            name: "<a style='font-size: 18px; font-weight: bold; color: #2a91ff' target='_blank' href='https://www.linkedin.com/company/ernstandyoung/'>Anisha Sinha Roy</a>",
            company: "EY",
            src: "./images/anisharoy.jpg",
            color: "#A29956"
        },{
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quia perspiciatis eaque exercitationem quos similique cumque quasi rerum deserunt? Rem enim quae veniam beatae deserunt.",
            designation: "Senior IOS developer",
            name: "<a style='font-size: 18px; font-weight: bold; color: #2a91ff' target='_blank' href='https://www.linkedin.com/in/anand-nanavaty-343aa69a/'>Anand Nanavaty</a>",
            company: "Brandenburg (UK) Ltd.",
            src: "./images/anand.jpg",
            color: "#5379a0"
        },
    ];

    let elem = '';
    arr.forEach(e => { 
        elem += `<div class="employee_words" style="background-image: linear-gradient(#323232, ${e.color}); margin-left: 0; margin-right: 20px">
                    <div style="margin-bottom: 20px; position: relative">
                        <img src="${e.src}" class="employee_img">
                        <div  class="employee_details">
                            <div class="abccd" style="font-size: 12px;">${e.name}</div>
                            <div style="">${e.designation}<br />
                                ${e.company}
                            </div>
                        </div>
                    </div>
                    <div class="words">
                        ${e.quote}
                    </div>
                </div>`;
    });
    document.querySelector('.employee_words_box').innerHTML = elem;
}