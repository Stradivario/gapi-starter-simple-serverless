import { GraphQLInt, GraphQLObjectType} from "@gapi/core";

export const AppType = new GraphQLObjectType({
    name: 'AppType',
    fields: () => ({
        id: {
            type: GraphQLInt
        }
    })
});

// Experimental decorator making strong typing more fun (not for production in that moment)
// @GapiObjectType()
// export class AppType {
//     readonly id: number | GraphQLScalarType = GraphQLInt;
// }