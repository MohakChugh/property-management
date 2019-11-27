const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080

const authenticate = require('./auth/auth')
const query = require('./hasuraApi/query')
const insert = require('./hasuraApi/insert')
const del = require('./hasuraApi/delete');

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: "Express Server is Working"
    })
})

app.post('/login', async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    let loginResult = await authenticate.authenticateUser(email, password)
    res.send(loginResult)
})

app.post('/signup', async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    console.log(email)
    console.log(password)

    let registerResult = await authenticate.registerUser(email, password)
    res.send(registerResult)
})

app.get('/client', async (req, res) => {
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    token = JSON.parse(token)

    let validated = await authenticate.validateToken(token)
    if (validated === true) {
        let clientData = await query.getClient()
        res.json({
            authenticated: true,
            data: clientData
        })
    } else {
        res.json({
            authenticated: false
        })
    }
})

app.post('/addclient', async (req, res) => {
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    token = JSON.parse(token)

    let validated = await authenticate.validateToken(token)
    if (validated === true) {
        let name = req.body.name
        let email = req.body.email
        let phone = req.body.phone
        let type = req.body.type
        let address = req.body.address
        let occupation = req.body.occupation
        let additional_details = req.body.additional_details
        let insertResult = await insert.addclientData(name, email, phone, type, address, occupation, additional_details)
        if (insertResult.insert_clientData.affected_rows) {
            res.send(insertResult)
        } else {
            res.json({
                authenticated: true,
                success: false
            })
        }
    }
})

app.post('/searchproperties', async (req, res) => {
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    token = JSON.parse(token)

    let validated = await authenticate.validateToken(token)
    if (validated === true) {

        // All blank fields should be send like : 
        // "property" : ""
        let property = req.body.property
        let fh_lh = req.body.fh_lh
        let locality = req.body.locality
        let bhk = req.body.bhk
        let property_type = req.body.property_type
        let isFurnished = req.body.isFurnished
        let area = req.body.area
        let isSale = req.body.isSale
        let block = req.body.block
        let floor = req.body.floor
        let priceFrom = req.body.priceFrom
        let priceTo = req.body.priceTo

        let arr1 = [property, fh_lh, locality, bhk, property_type, isFurnished, area, isSale, block, floor, priceFrom, priceTo]
        let arr2 = ["property", "fh_lh", "locality", "bhk_type", "type", "isFurnished", "area", "sell_rent", "block", "floor", "priceFrom", "priceTo"]

        // Build a Where Clause
        // Algorithm for Building a search clause
        /*
            loop ->
            if (variable != '')
            {
                string += varibale: {_eq: ""}
            }
        */
        // Return The Search Query
        var string = ''
        string += `price: {_gte: "${priceFrom}", _lte: "${priceTo}"}`
        for (let i = 0; i < arr1.length - 2; i++) {
            if (arr1[i] != '') {
                string += `${arr2[i]} : {_eq: "${arr1[i]}"},`
            }
        }

        let searchResults = await query.searchProperty(string)
        console.log(searchResults)
        res.send(searchResults)

    }
})

app.get('/properties', async (req, res) => {
    console.log('Properties function was called!');
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    token = JSON.parse(token)
    console.log(token)

    let validated = await authenticate.validateToken(token)
    if (validated === true) {
        let propertyData = await query.getProperty()
        res.json({
            authenticated: true,
            data: propertyData
        })
    } else {
        res.json({
            authenticated: false
        })
    }
})

// TODO: Add Propertities left 
app.post('/addproperty', async (req, res) => {
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    token = JSON.parse(token)

    let validated = await authenticate.validateToken(token)
    if (validated === true) {
        // 
        let propertyCategory    =req.body.propertyCategory;
        let sellRent            =req.body.sellRent;
        let block               =req.body.block;
        let bhk                 =req.body.bhk;
        let floor               =req.body.floor;
        let furnishedUnfurnished=req.body.furnishedUnfurnished;
        let area                =req.body.area;
        let price               =req.body.price;
        let PropertyType        =req.body.PropertyType;
        let address             =req.body.address;
        let fhLh                =req.body.;
        let unitNumber          =req.body.;
        let locality            =req.body.;
        let description         =req.body.;
        let ownerName           =req.body.;
        let ownerNumber         =req.body.;
        let partnerName         =req.body.;
        // let additional_details = req.body.additional_details
        // 
        let insertResult = await insert.addclientData(name, email, phone, type, address, occupation, additional_details)
        // 
        if (insertResult.insert_clientData.affected_rows) {
            //    
            res.send(insertResult)
        } else {
            //   
            res.json({
                authenticated: true,
                success: false
            })
        }
    }
})

app.post('/resetpassword', async (req, res) => {
    let email = req.body.email
    let newPassword = req.body.password
    let updatePasswordResult = await authenticate.changePassword(email, newPassword)
    res.send(updatePasswordResult)
})

app.post('/validatetoken', async (req, res) => {
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    if (token) {
        token = JSON.parse(token)
        console.log(`Token sent while validating is : ${token}`)
    }

    let validated = await authenticate.validateToken(token)
    if (validated) {
        res.json(
            true
        );
    } else {
        res.json({
            validate: false
        });
    }
})

app.post('/deleteproperty', async (req, res) => {
    let headers = req.headers.authentication
    headers = headers.split(" ")
    let token = headers[1]
    token = JSON.parse(token)
    let validated = await authenticate.validateToken(token)
    if (validated === true) {
        // Delete Property
        let id = req.body.id
        let result = del.deleteproperty(id)
        res.send(true)
    } else {
        res.json({
            authentication: false
        })
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})