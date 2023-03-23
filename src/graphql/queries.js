/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
      id
      member
      name
      description
      amount
      phoneNumber
      email
      image
      createdAt
      updatedAt
    }
  }
`;
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member
        name
        description
        amount
        phoneNumber
        email
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
