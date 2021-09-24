
const {gql} = require('apollo-server');
import { commonsTypedefs } from './commons';
import { examTypedefs } from "./examTypedefs";
import { helloTypedefs } from "./helloTypedefs";


const typeDefs = gql`

    scalar Date

    type Query {
        _: String
    }
    type Mutation{
        _:String
    }
`
export = [
    typeDefs,
    examTypedefs,
    helloTypedefs,
    commonsTypedefs
]
