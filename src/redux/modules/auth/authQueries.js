import gql from 'graphql-tag';

const USER_FIELDS = gql`
    fragment UserFields on User {
        id
        name
        email
    }
`;

const LOGIN_USER = gql`
    mutation loginUser(
        $email: String!,
        $password: String!
    ) {
        loginUser(data: {
            email: $email,
            password: $password
        }) {
            access_token
            user {
                ...UserFields
            }
        }
    }
    ${USER_FIELDS}
`;

const REGISTER_USER = gql`
    mutation registerUser(
        $name: String!
        $email: String!
        $password: String!
    ) {
        registerUser(data: {
            name: $name,
            email: $email,
            password: $password
        }) {
            access_token
            user {
                ...UserFields
            }
        }
    }
    ${USER_FIELDS}
`;

export const queries = {
    LOGIN_USER,
    REGISTER_USER
}
