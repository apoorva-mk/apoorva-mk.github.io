const experience = [
   {
       id: 4,
       company: "D. E. Shaw, Software Engineering Intern",
       role: "Software Engineering Intern",
       time: "May 2020 - June 2020",
       image: "static/deshaw-logo.png",
       imagealt: "D. E. Shaw",
       details: [
           "Worked as a part of the Middleware messaging team to design and develop an enhanced security tool for the <b>Kafka cluster.</b>"
       ]
   }, 
   {
        id: 3,
        company: "Google Summer of Code, Mifos Initiative",
        role: "Student Developer",
        time: "May 2019 - Aug 2019",
        image: "static/gsoc-logo.png",
        imagealt: "GSoC",
        details: [
            "Developed a Computer vision-based Android app written in Kotlin which uses Google Cloud APIs to conduct the Poverty Probability Index(PPI) survey.", 
            "Applied image augmentation and preprocessing techniques for handling small data set size using Tensorflow and Scikit-learn frameworks."
        ]
   },
   {
        id: 2,
        company: "Indian Institute of Science",
        role: "Research Fellow",
        time: "May 2019 - June 2019",
        image: "static/iisc-logo.png",
        imagealt: "IISc",
        details: [
            "Worked on improving the Image denoising Algorithm using Mixture of Gaussian Scale Mixture Models and deep learning.", 
            "Implemented the EM Algorithm in MATLAB and decreased convergence time by 83% by restructuring iterative sections as matrix operations."
        ]
    },
    {
        id: 1,
        company: "Optym, India",
        role: "Operation Research Intern",
        time: "Dec 2018 - Dec 2019",
        image: "static/optym-logo.png",
        imagealt: "Optym",
        details: [
            "Devised and remodelled the stop time prediction regression model to predict at individual customer level which improved accuracy by 16%.",
            "Used Python and Scikit-learn library."
        ]
    }
]

function ExperienceTemplate(experience) {
    return `
    <img src=${experience.image} alt=${experience.imagealt}>
    <heading>${experience.company}, ${experience.role}</heading>
    <content>
        <div>
        <ul>
            ${experience.details.map(DetailTemplate).join("")}
        </ul>
        </div>
    </content>
    <br>
    `;
}

function DetailTemplate(details){
    return `
    <li>${details}</li>
    `;
}

document.getElementById("experience").innerHTML = `
    ${experience.map(ExperienceTemplate).join("")}
`;