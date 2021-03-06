import { buildSchema } from 'graphql';
export default buildSchema(`
    input ListItemInput {
        name: String!
        description: String
        count: Int
        completed: Boolean
        id: ID
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
        deleteItem(id: ID!): ListItem
    }

    type Query {
        getItems: [ListItem]
    }
`);
