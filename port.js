document.addEventListener('DOMContentLoaded', () => {
    // Download CV Button Click Event
    document.getElementById('download-cv').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        downloadCV();
    });
});

function downloadCV() {
    // Create an anchor element
    const a = document.createElement('a');
    a.href = 'Resume.pdf'; // Path to your resume file
    a.download = 'Resume.pdf'; // Default file name for download

    // Append anchor to the body
    document.body.appendChild(a);

    // Trigger the download by simulating a click
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);
}
