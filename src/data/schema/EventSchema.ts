import { Schema } from "mongoose";

// Schema para dados de localização
const LocationDataSchema = new Schema({
  address: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: false, default: 0 },
    lng: { type: Number, required: false, default: 0 }
  },
  formattedAddress: { type: String, required: false },
  addressComponents: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
  }
}, { _id: false }); // Não criar _id para subdocumento

const EventSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true },
  location: { type: String, required: true }, // Manter para compatibilidade
  // locationData: { type: LocationDataSchema }, // Novos dados estruturados
  createdAt: { type: Date, default: Date.now },
  // imageUrl: { type: String },
  startDateTime: { type: Date, default: Date.now  },
  price: { type: String, required: true },
  link: { type: String, required: false },
  capacity: { type: Number, required: true },
  // category: { type: Schema.Types.ObjectId, ref: 'Category' },
  // organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

export default EventSchema;
