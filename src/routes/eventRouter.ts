import EventModel from "../data/models/EventModel";
import RouterConfig from "../generators/CommonTypes/RouterConfig";
import RouterFactory from "../generators/Factories/RouterFactory";

export const event_config: RouterConfig[] = [
    {
        type:       "GET",
        uri:        "/one/:id",
        middleware: {
            type: "GET_BY_ID",
            model: EventModel,
        },
   },
    {
        type:       "GET",
        uri:        "/all",
        middleware: {
            type: "GET_ALL",
            model: EventModel,
        },
    },
    {
        type:       "GET",
        uri:        "/count",
        middleware: {
            type: "GET_COUNT",
            model: EventModel,
        },
    },
    {
        type:       "POST",
        uri:        "/",
        middleware: {
            type: "POST_ONE",
            model: EventModel,
        },
    },
    {
        type:       "PATCH",
        uri:        "/:id",
        middleware: {
            type: "UPDATE_BY_ID",
            model: EventModel,
        },
    },
    {
        type:       "DELETE",
        uri:        "/:id",
        middleware: {
            type: "DELETE_BY_ID",
            model: EventModel,
        },
    },
];

export const EventRouter = RouterFactory.createRoute(event_config);
