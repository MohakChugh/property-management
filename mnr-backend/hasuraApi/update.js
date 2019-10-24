const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;


const updatePassword = async (email, hashedPassword) => {
    const client = new GraphQLClient('https://mnr-project.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'mnrproject'
        },
    })
    const query = `mutation MyMutation {
        __typename
        update_users(where: {email: {_eq: "${email}"}}, _set: {password: "${hashedPassword}"}) {
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
exports.updatePassword = updatePassword