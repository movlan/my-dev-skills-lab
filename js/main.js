const storage = window.localStorage;
var skills = [];
var storedSkills = storage.getItem('skills');
if (storedSkills) {
    skills = JSON.parse(storedSkills)
}



$('.addSkill').click(function () {
    if ($('input').val() === '') return; 
    skills.push($('input').val());
    storage.setItem('skills', JSON.stringify(skills));
});

storage.setItem('skill2', 'asdasfa')
// // console.log(skills);
// // console.log(skills)
// skills.push('test1', 'test2')
// storage.setItem("skills1", 'test3')
