document.getElementById('assessmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected values from the form
    const analyticalSkills = parseInt(document.querySelector('input[name="analyticalSkills"]:checked')?.value);
    const technicalKnowledge = parseInt(document.querySelector('input[name="technicalKnowledge"]:checked')?.value);
    const creativity = parseInt(document.querySelector('input[name="creativity"]:checked')?.value);
    const leadership = parseInt(document.querySelector('input[name="leadership"]:checked')?.value);
    const preferredWorkType = parseInt(document.querySelector('input[name="preferredWorkType"]:checked')?.value);

    // Validate if all questions have been answered
    if ([analyticalSkills, technicalKnowledge, creativity, leadership, preferredWorkType].includes(undefined)) {
        alert('Please answer all the questions.');
        return;
    }

    // Define dataset
    const dataset = [
        {skills: [1, 1, 0, 0, 1], career: "Data Scientist"},
        {skills: [1, 1, 0, 0, 0], career: "Software Developer"},
        {skills: [0, 0, 1, 1, 0], career: "Graphic Designer"},
        {skills: [0, 1, 1, 1, 0], career: "Product Designer"},
        {skills: [1, 0, 1, 1, 1], career: "Marketing Specialist"},
        {skills: [1, 1, 1, 0, 1], career: "AI Engineer"},
        {skills: [0, 1, 0, 1, 1], career: "Team Manager"},
        {skills: [0, 0, 0, 0, 1], career: "Customer Relations"},
    ];

    // Match input with dataset
    let bestMatch = '';
    let minDiff = Infinity;

    dataset.forEach(item => {
        const diff = item.skills.reduce((acc, curr, index) => acc + Math.abs(curr - [analyticalSkills, technicalKnowledge, creativity, leadership, preferredWorkType][index]), 0);
        if (diff < minDiff) {
            minDiff = diff;
            bestMatch = item.career;
        }
    });

    // Show result
    document.getElementById('result').textContent = `Based on your responses, a suitable career for you might be: ${bestMatch}`;
});