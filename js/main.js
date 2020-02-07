var skills = [];

$('.addSkill').click(function() {
    let inputVal = $('input').val();
    if (inputVal === '') return; 
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