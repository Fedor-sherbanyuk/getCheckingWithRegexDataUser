//////////FIRST_NAME
function testFirstName(name) {
    if (/^[a-zA-Z]+$/.test(name) === false) {
        // alert('The first name must contain only latin letters');
        return false;
    }
    if (name.length < 2 || name.length > 20) {
        // alert('First name must be from 2 to 20 characters');
        return false;
    }
    if (parseInt(name.slice(0, 1))) {
        // alert('First name must begin start with a letter');
        return false;
    }
    return true;
}

//////////LAST_NAME
function testLastName(name) {
    if (/^[a-zA-Z]+$/.test(name) === false) {
        return false;
    }
    if (name.length < 2 || name.length > 20) {
        return false;
    }
    if (parseInt(name.slice(0, 1))) {
        return false;
    }
    return true;
}

////EMAIL_REGEXP
function testEmail(email) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(email);
}

/////PASSWORD_REGEXP
function testPassword(password) {
    const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return PASSWORD_REGEXP.test(password);
}
