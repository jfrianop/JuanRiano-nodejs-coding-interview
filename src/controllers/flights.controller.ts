import { JsonController, Get } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'

const flightsService = new FlightsService()

@JsonController('/flights')
export default class FlightsController {
    @Get('', { transformResponse: false })
    getAll() {
        return {
            status: 200,
            data: flightsService.getAll(),
        }
    }
}
