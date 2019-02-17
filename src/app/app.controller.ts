import { Controller, Type, Query, GraphQLNonNull, GraphQLInt } from "@gapi/core";
import { AppType } from "./app.type";
import { IAppType } from "./core/api-introspection";

@Controller()
export class AppQueriesController {

    @Type(AppType)
    @Query({
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    })
    findApp(root, { id }: { id: number }, context): IAppType {
        return { id };
    }

}


