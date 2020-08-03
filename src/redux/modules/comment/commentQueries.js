import gql from "graphql-tag";

const CREATE_COMMENT = gql`
  mutation createComment($text: String!, $postId: ID!, $userId: ID!) {
    createComment(data: { text: $text, postId: $postId, userId: $userId }) {
      id
      text
      createdAt
    }
  }
`;

export const queries = {
  CREATE_COMMENT,
};
