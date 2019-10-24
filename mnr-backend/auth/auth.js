const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const insert = require('../hasuraApi/insert')
const query = require('../hasuraApi/query')
const update = require('../hasuraApi/update')

let saltRounds = 10

const authenticateUser = async (email, password) => {

    // Check if the email is valid or not
    let properemail = await validator.isEmail(email)
    if (!properemail) {
        return 'false'
    }

    // Getting hashed password from the database
    let queryData = await query.getpassword(email)
    let hashedPassword = await queryData.users[0].password
    console.log(hashedPassword)

    // Comparing the hashed password
    let tokeniser = await bcrypt.compare(password, hashedPassword).then(function (result) {
        console.log(result)
        if (result == true) {
            let token = jwt.sign({ data: hashedPassword }, 'secret', { expiresIn: '1h' });
            console.log(token)

            //Send back JWT Token
            return token
        } else {
            console.log('Couldnt find the password')
            return 'false'
        }
    });
    return tokeniser
}

const registerUser = async (email, password) => {
    let properemail = validator.isEmail(email)
    if (!properemail) {
        return 'false'
    }
    else {
        let hashedPassword = ''

        // Encrypt the password
        await bcrypt.hash(password, saltRounds).then(function (hash) {
            hashedPassword = hash
        });
        console.log(hashedPassword)

        // Save the user in the database
        let insertuser = await insert.addUser(email, hashedPassword)
        console.log(insertuser)
        return insertuser
    }
}

const validateToken = async (token) => {
    try {
        // Decode Jwt which contains encrypted password
        var decode = jwt.verify(token, 'secret')
        let userid = await query.checkUserFromPassword(decode.data)
        // Existance of user is checked by checking the id of user in the databse by providing the hashed password
        // Return true on Existance, False Otherwise
        if (userid.users[0].id) {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log(err)
    }
}

const changePassword = async (email, newPassword) => {
    let properemail = validator.isEmail(email)
    if (!properemail) {
        return 'false'
    }
    else {
        let hashedPassword = ''

        // Encrypt the password
        await bcrypt.hash(newPassword, saltRounds).then(function (hash) {
            hashedPassword = hash
        });
        console.log(hashedPassword)

        // Save the user in the database
        let updateUser = await update.updatePassword(email, hashedPassword)
        console.log(updateUser)
        return updateUser
    }
}


exports.authenticateUser = authenticateUser
exports.registerUser = registerUser
exports.validateToken = validateToken
exports.changePassword = changePassword