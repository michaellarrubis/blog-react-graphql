import gql from 'graphql-tag';

const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    title
    body
    published
    imageUrl
    createdAt
    updatedAt
    user {
      id
    }
    comments {
      id
      text
      createdAt
    }
  }
`;

const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $published: Boolean
    $body: String
    $imageUrl: String
    $userId: ID!
  ) {
    createPost(data: {
      title: $title
      published: $published
      body: $body
      imageUrl: $imageUrl
      userId: $userId
    }) {
      id
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost(
    $id: ID!
    $title: String
    $published: Boolean
    $body: String
    $imageUrl: String
  ) {
    updatePost(id: $id, data: {
      title: $title
      published: $published
      body: $body
      imageUrl: $imageUrl
    }) {
      id
    }
  }
`;

const GET_POST = gql`
  query post(
    $id: ID!
  ) {
    post(id: $id) {
      ...PostFields
    }
  }
  ${POST_FIELDS}
`;

const GET_POSTS = gql`
  query posts(
    $limit: ID!
    $page: ID!
  ) {
    posts(limit: $limit, page: $page) {
      posts {
        ...PostFields
      }
      count
    }
  }
  ${POST_FIELDS}
`;

export const queries = {
  CREATE_POST,
  GET_POST,
  GET_POSTS,
  UPDATE_POST
}
