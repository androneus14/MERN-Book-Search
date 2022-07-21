import { gql } from '@apollo/client';

export const GET_ME = gql`
    query_me {
        me {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;