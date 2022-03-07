import { FlightsModel } from '../models/flights.model'
import { PersonsModel } from '../models/persons.model'

export class FlightsService {
    async onboardPassenger(flightId: string, passengerId: string) {
        const flight = await FlightsModel.findOne({'_id': flightId})
        if (!flight) throw new Error(`Error: flight with id ${flightId} does not exist`)

        const person = await PersonsModel.findOne({'_id': passengerId})
        if (!person) throw new Error(`Error: person with id ${passengerId} does not exist`)

        if (flight.passengers.indexOf(passengerId) > -1) {
            throw new Error('Error: person is already in flight')
        }

        flight.passengers = [ ...flight.passengers, passengerId]

        await flight.save()

        return flight
    }
    async getAll() {
        return await FlightsModel.find()
    }
}
