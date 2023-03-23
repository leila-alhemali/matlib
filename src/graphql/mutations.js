/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
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
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
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
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
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
