import gql from "graphql-tag";

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

const UPSERT_POST = gql`
  mutation upsertPost(
    $id: ID
    $title: String
    $published: Boolean
    $body: String
    $imageUrl: String
    $userId: ID
  ) {
    upsertPost(
      id: $id
      data: {
        title: $title
        published: $published
        body: $body
        imageUrl: $imageUrl
        userId: $userId
      }
    ) {
      id
    }
  }
`;

const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      ...PostFields
    }
  }
  ${POST_FIELDS}
`;

const GET_POSTS = gql`
  query posts($limit: ID!, $page: ID!) {
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
  GET_POST,
  GET_POSTS,
  UPSERT_POST,
};
