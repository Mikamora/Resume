let me = {
    Name: "Michael Richardson",
    Career: "Software Dev Student at Innovate Bham",
    Description: "I am a business minded individual with a lot of potential to devote toward a company."
}
let myInterests = ["TV","Video Games","Rock Climbing","Streaming on Twitch"];
let prevExp = ["Paraprofessional at Greystone Elementary School","Full-Time Sales Associate at H&M","Vet Technician at Cat Haven Vet Clinic"];
let Skills = ["percussion","JavaScript","CSS","HTML","Patience","Team Oriented","Leadership"];

console.log("Name: " + me.Name.toUpperCase());
console.log("Career: " + me.Career);
console.log("Description: " + me.Description);

for(i = 0; i < myInterests.length; i++){
    console.log(myInterests[i]);
}