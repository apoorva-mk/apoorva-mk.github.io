const extras = [
    "Head of Computer Science Group, ACM-NITK",
    "Co-head DSC, Web Enthusiasts' Club",
    "Chairperson at ACM-W NITK Student Chapter (2019-2020)",
    "Syllabus and Content designer at Aahwahan Foundation - Computer Institute on Wheels program.",
    "Executive Member at ACM-NITK, Web-Enthusiast’s Club.",
    "Hobbies - Competitive Coding, Solving Puzzles, Contributing to Open Source, Singing, Painting"
]

function ExtraTemplate(extra) {
    return `
    <li>${extra}</li>
    `;
}

document.getElementById("extra").innerHTML = `
    <ul>
        ${extras.map(ExtraTemplate).join("")}
    </ul>
`;