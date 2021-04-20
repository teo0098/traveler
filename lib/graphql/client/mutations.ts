import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            refreshToken
            accessToken
        }
    }
`

export const ADD_TRAVEL = gql`
    mutation AddTravel($files: [Files!]!, $refreshToken: String, $travel: Travel!) {
        addTravel(files: $files, refreshToken: $refreshToken, travel: $travel)
    }
`