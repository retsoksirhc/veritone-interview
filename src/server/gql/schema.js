export default `
    input ListItemInput {
        name: String!
        description: String
        count: Int
        completed: Boolean
    }

    type ListItem {
        name: String!
        description: String
        count: Int
        completed: Boolean
        id: ID!
    }

    type Mutation {
        addItem(item: ListItemInput): ListItem
        updateItem(id: ID!, item: ListItemInput): ListItem
        deleteItem(id: ID!): ID
    }

    type Query {
        getItems: [ListItem]
    }
`;
