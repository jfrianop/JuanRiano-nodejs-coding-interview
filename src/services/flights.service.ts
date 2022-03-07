import { FlightsModel } from '../models/flights.model'

export class FlightsService {
    getAll() {
        return FlightsModel.find()
    }
}
