import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type SearchUser {
    id: Int!
    username: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    avatar: String!
    travels: [String]!
  }

  type Travels {
    id: Int!
    name: String
    created_at: String!
    image_url: String!
    username: String!
    travelLikes: Int!
    userLikes: Int!
  }

  type Images {
    image_url: String!
    image_desc: String
  }

  type TravelType {
    description: String
    payAttention: String
    startTime: String
    endTime: String
    images: [Images!]!
    users: [SearchUser]
    travelLikes: Int!
    userLikes: Int!
  }

  type Query {
    user: String
    users(userName: String!): [SearchUser!]!
    travels(offset: Int!, refreshToken: String): [Travels!]
    travel(id: Int!, refreshToken: String): TravelType!
  }

  type AuthPayload {
    token: String!
    error: String!
  }

  type VerifyPayload {
    verifyHash: String!
  }

  type LoginAuth {
    refreshToken: String!
    accessToken: String!
  }

  type Photo {
    photo: String!
  }

  input Files {
    desc: String
    base64: String!
  }

  input TagUsers {
    id: Int!
    username: String!
  }

  input Travel {
    name: String
    description: String
    private: Boolean!
    payAtention: String
    startTime: String
    endTime: String
    users: [TagUsers]
  }

  type Mutation {
    loginUser(email: String!, password: String!): LoginAuth!
    addTravel(files: [Files!]!, refreshToken: String, travel: Travel!): String!
    registerUser(
      username: String!
      password: String!
      email: String!
    ): AuthPayload
    verifyUser(verifyHash: String!): VerifyPayload

    editPassword(
      email: String!
      currentPassword: String!
      newPassword: String!
    ): Boolean

    editUsername(email: String!, newUsername: String!): LoginAuth
    changeUserPhoto(refreshToken: String!, file: String!): Photo
    getUserData(refreshToken: String!): User
    likeTravel(travelID: Int!, refreshToken: String!): Boolean!
  }

  type Subscription {
    travelLiked(travelID: Int!): Int!
  }
`;

export default typeDefs;
