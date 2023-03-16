/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onCreateMaterial(filter: $filter) {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onUpdateMaterial(filter: $filter) {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onDeleteMaterial(filter: $filter) {
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
