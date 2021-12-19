function getEmployeesWord() {
    console.log('YES')
    let arr = [
        {
            quote: "Rupam has always been very dedicated towards his work. His work-first and (customer/client)-first attitude is super positive for any organization. His independent work ability is great and is also a good team player.",
            name: "<a target='_blank' href='https://www.linkedin.com/in/pritam-roy/'>Pritam Roy</a>",
            designation: "Solution Engineer",
            company: "Instabase",
            color:"#A25670"
        },{
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quia perspiciatis eaque exercitationem quos similique cumque quasi rerum deserunt? Rem enim quae veniam beatae deserunt.",
            designation: "Lead Senior IOS developer",
            name: "<a target='_blank' href='https://www.linkedin.com/in/anand-nanavaty-343aa69a/'>Anand Nanavaty</a>",
            company: "Brandenburg (UK) Ltd.",
            color: "#A29956"
        },{
            quote: "I am pleased to work with you. You have such a great talent. Never let it fade away. Keep shining.",
            name:"Sayan Dutta",
            designation: "Business Partner",
            company: "Read24hrs",
            color:"#A25656"
        },{
            quote: "Super talented, hardworking fellow... self motivated,always chasing his passion.Keep ur enthu as it is  and enjoy ur life to the best",
            designation: "Advanced Analyst",
            name: "<a target='_blank' href='https://www.linkedin.com/company/ernstandyoung/'>Anisha Sinha Roy</a>",
            company: "EY",
            color: "#A29956"
        },
    ];

    let elem = '';
    arr.forEach(e => { 
        elem += `<div class="employee_words" style="background-color: ${e.color};">
                    <div class="words">
                        ${e.quote}
                    </div>
                    <div class="employee_details">
                        <div style="font-size: 12px;">${e.name}</div>
                        <div style="">${e.designation}<br />
                            ${e.company}</div>
                    </div>
                </div>`;
    });
    document.querySelector('.employee_words_box').innerHTML = elem;
}