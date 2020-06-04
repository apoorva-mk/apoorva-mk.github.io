const achievements = [
    "Achieved a rank of 169 out of 4400+ teams across India in ACM-ICPC Online Round and qualified for Asia-Amritapuri Regional Onsite Round.",
    "Secured rank 38/500+ in ACM-ICPC Asia Kanpur Online Round and rank 9 in ACM-ICPC Chennai Provincial Online Round.",
    "Winner of Facebook Hackathon: Messaging out of 1900+ participants.",
    "Selected for Indian Academy of Sciences - Summer Research Fellowship ‘19 awarded to 365 students nationwide in India.",
    "Second runners up in HackVerse, 24-Hour Nation Wide Hackathon out of 2500+ applicants.",
    "Shortlisted for the Smart India Hackathon Grand Finale - 2019 (Software Edition).",
    "Among the 100 students selected to attend Tech Intern Connect ‘19 at Google, Bangalore.",
    "Open Source Contributor - Mifos Initiative, Systers Open Source.",
    "Recipient of the prestigious NTSE Scholarship 2015 awarded to 1000 students all over India.",
    "Qualified the Karnataka Regional Math Olympiad 15 - State rank 14."
]

function AchievementTemplate(achievement) {
    return `
    <li>${achievement}</li>
    `;
}

document.getElementById("achievements").innerHTML = `
    <ul>
        ${achievements.map(AchievementTemplate).join("")}
    </ul>
`;