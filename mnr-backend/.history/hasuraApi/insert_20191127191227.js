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

const addproperty = async () => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_propertydata(objects: {address: "${address}", area: "${area}", bhk_type: "${bhk_type}", block: "${block}", fh_lh: "${fh_lh}", 
        contact_number: "${contact_number}", floor: "${floor}", locality: "${locality}", owner_name: "${owner_name}", partner_name: "${partner_name}", 
        price: "${price}", sell_rent: "${sell_rent}", type: "${type}"}) {
          affected_rows
        }
      }
      `;
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
