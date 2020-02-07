const storage = window.localStorage;
var skills = [];



// function init() {
//     if (storage.length) {
//         for (const key in storage) {
//             skills.push(storage[key]);
//         }
//     }
//     render();
// }

// function render() {
//     for (const element of skills) {
//         console.log(element)
//         $('div.skills').append(`<tr>
//         <td><button class="removeBtn">X</button></td>
//         <td class="skill">${element}</td>
//     </tr>`);
//     }
// }
// init();


$('.addSkill').click(function() {
    let inputVal = $('input').val();
    if (inputVal === '') return; 
    skills.push(inputVal);
    $('div.skills').append(`
    <tr>
        <td><button class="removeBtn">X</button></td>
        <td class="skill">${inputVal}</td>
    </tr>`);
    $('input').val('');
});

$('input').keypress(function (e) {
    if (e.which == 13) {
        let inputVal = $('input').val();
        if (inputVal === '') return; 
        skills.push(inputVal);
        $('div.skills').append(`
        <tr>
            <td><button class="removeBtn">X</button></td>
            <td class="skill">${inputVal}</td>
        </tr>`);
        $('input').val('');
    }
  });

$('div.skills').on(
    'click',
    'button',
    function() {
    $(this).closest('tr').remove();
});

// storage.setItem('', JSON.stringify(skills));
// // console.log(skills);
// // console.log(skills)
// skills.push('test1', 'test2')
// storage.setItem("skills1", 'test3')

// if (storedSkills) {
//     skills = JSON.parse(storedSkills)
// }