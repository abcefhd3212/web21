
const name = document.getElementById("name")
const name = document.getElementById('pass')
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
    $('div.checkbox-group.required :checkbox:checked').length > 0
    var x = document.getElementById("check").required; 
    let messages = []
    if (name.value.length<=2 || name.value == null ) {
        messages.push('Please Enter Your Name With at least one char and one space')
    }
    e.preventDefault()
    
    if (messages.length > 0)
{

    e.preventDefault()
    errprElement.innerText = messages.join(' , ')
}
})