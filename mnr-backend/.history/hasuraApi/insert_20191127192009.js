const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const addUser = async (email, password) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_users(objects: {email: "${email}", password: "${password}"}) {
            affected_rows
        }
    }`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const addclientData = async (name, email, phone, type, address, occupation, additional_details) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_clientData(objects: {AdditionalDetails: "${additional_details}", Address: "${address}", Email: "${email}", Name: "${name}", Occupation: "${occupation}", PhoneNumber: "${phone}", type: "${type}"}) {
            affected_rows
        }
    }`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const addproperty = async (type, sell_rent, price, partner_name, owner_name, locality, isFurnished, floor, fh_lh, contact_number, block, bhk_type, area, address, propertyCategory, unitNumber, description) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_propertydata(objects: {type: "${type}", sell_rent: "${sell_rent}", price: "${price}", partner_name: "${partner_name}", owner_name: "${owner_name}", locality: "${locality}", isFurnished: "${isFurnished}", floor: "${floor}", fh_lh: "${fh_lh}", contact_number: "${contact_number}", block: "${block}", bhk_type: "${bhk_type}", area: "${area}", address: "${address}", propertyCategory: ${propertyCategory}}) {
            affected_rows
            returning {
                id
            }
        }
    }`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

exports.addUser = addUser;
exports.addclientData = addclientData;
exports.addproperty = addproperty;
