$(document).ready(function () {

    function showError(element, msg, id) {
        function showMsg() {
            var errElement = `<small id="${id}" class="text-Red pt-1 text-right">${msg}</small>`
            element.after(errElement).removeClass('border-GrayishBlue').addClass('border-Red')
        }
        var errElem = $(`#${id}`)
        !errElem.length ? showMsg() : ''
    }

    function removeError(element, name) {
        var errorElem = $(`#${name}`)
        if (errorElem.length) {
            errorElem.remove()
            element.removeClass('border-Red').addClass('border-GrayishBlue')
        }
    }

    function IsEmail(email,elem) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var id = 'email'
        var Emailmessage = 'Looks like this is not a email'
        !regex.test(email) ? showError(elem, Emailmessage, id) : removeError(elem, id)
    }

    function IsInputEmpty(element, value){
        var id = ''
        element.attr('name') == 'First Name' ? id = 'First Name' : id = 'Second Name'
        element.attr('type') == 'password' ? id = 'Password' : ''
        var message = `${id} cannot be Empty`
        id = id.replace(' ', '')
        value ? removeError(element, id) : showError(element, message, id)
    }

    function handleError(elem){
        var value = elem.val()
        elem.attr('type') == 'email' ? IsEmail(value,elem) : IsInputEmpty(elem,value)
    }

    $('input').blur(function () {
        handleError($(this))
    })

    $('#submit').click(function(e){
        e.preventDefault()
        var firstName = $('input[name = "First Name"')
        var secondName = $('input[name = "Second Name"')
        var password = $('input[type = "password"')
        var email = $('input[type = "email"')
        handleError(firstName)
        handleError(secondName)
        handleError(password)
        handleError(email)
    })
})