import { model } from "mongoose";
import EventSchema from "../schema/EventSchema";

const EventModel = model('Events', EventSchema);

export default EventModel;
