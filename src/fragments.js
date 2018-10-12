import gql from "graphql-tag";

export const NOTE_FRAGMENT = gql`
  fragment NotePars on Note {
    id
    title
    content
  }
`;
