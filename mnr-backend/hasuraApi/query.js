const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const getProperty = async () => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `query MyQuery {
        propertydata(order_by: {time: desc}) {
          address
          area
          bhk_type
          block
          contact_number
          fh_lh
          floor
          id
          locality
          owner_name
          partner_name
          price
          sell_rent
          type
        }
      }
      `;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    return result;
};
const getClient = async () => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `query MyQuery {
        clientData(order_by: {time: desc}) {
          AdditionalDetails
          Address
          Email
          Occupation
          Name
          PhoneNumber
          id
          type
        }
      }
      `;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    return result;
};
const login = async (email, password) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `query MyQuery {
        users(where: {email: {_eq: "${email}"}, password: {_eq: "${password}"}}) {
          email
          password
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
const getpassword = async (email) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `query MyQuery {
        users(where: {email: {_eq: "${email}"}}) {
          email
          password
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
const checkUserFromPassword = async (hashedPassword) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `query MyQuery {
        users(where: {password: {_eq: "${hashedPassword}"}}) {
          id
        }
      }
      `;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => {
            console.log(err)
            return err
        });
    return result;
};
const searchProperty = async (whereclause) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `query MyQuery {
        propertydata(where: {${whereclause}}) {
          address
          area
          bhk_type
          block
          contact_number
          fh_lh
          floor
          locality
          owner_name
          partner_name
          sell_rent
          price
          type
        }
      }`;

    console.log(query)

    
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => {
            console.log(err)
            return err
        });
    return result;
};


exports.getProperty = getProperty
exports.getClient = getClient
exports.login = login
exports.getpassword = getpassword
exports.checkUserFromPassword = checkUserFromPassword
exports.searchProperty = searchProperty