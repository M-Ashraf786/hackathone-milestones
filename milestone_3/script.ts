
const form = document.getElementById("form") as HTMLFormElement
const resume = document.getElementById("resume") as HTMLDivElement
form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLTextAreaElement).value
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value

    const createResume = `
    <h1></h1>
    <p></p>
    <h1>DYNAMIC RESUME BUILDER</h1><br/><br/>
    <h2>PERSONAL INFORMATION</h2><br/>
     <p>Name: ${name}</p>
      <p>Email: ${email}</p>
       <p>Phone: ${phone}</p><br/>

    <h2>EDUCATION</h2><br/>
    <p>Education: ${education}</p><br/>

     <h2>SKILLS</h2><br/>
    <p>Skills: ${skills}</p><br/>

     <h2>EXPERIENCE</h2><br/>
    <p>Experience: ${experience}</p>
    
    `
if(resume){
    resume.innerHTML = createResume
}else{
    console.error("error")
}
    
})

