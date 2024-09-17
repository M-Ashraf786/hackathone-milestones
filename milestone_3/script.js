var form = document.getElementById("form");
var resume = document.getElementById("resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var createResume = "\n    <h1></h1>\n    <p></p>\n    <h1>DYNAMIC RESUME BUILDER</h1><br/><br/>\n    <h2>PERSONAL INFORMATION</h2><br/>\n     <p>Name: ".concat(name, "</p>\n      <p>Email: ").concat(email, "</p>\n       <p>Phone: ").concat(phone, "</p><br/>\n\n    <h2>EDUCATION</h2><br/>\n    <p>Education: ").concat(education, "</p><br/>\n\n     <h2>SKILLS</h2><br/>\n    <p>Skills: ").concat(skills, "</p><br/>\n\n     <h2>EXPERIENCE</h2><br/>\n    <p>Experience: ").concat(experience, "</p>\n    \n    ");
    if (resume) {
        resume.innerHTML = createResume;
    }
    else {
        console.error("error");
    }
});
