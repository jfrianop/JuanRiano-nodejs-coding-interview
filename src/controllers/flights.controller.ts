import { Get, Post, JsonController, BodyParam, Param } from 'routing-controllers'

import { FlightsService } from '../services/flights.service'

const flightsService = new FlightsService()

@JsonController('/flights')
export default class FlightsController {
    @Get('', { transformResponse: false })
    async getAll() {
        return {
            status: 200,
            data: await flightsService.getAll(),
        }
    }

    @Post('/:flightId/onboard', {transformResponse: false})
    async onboardPassenger(@BodyParam('passengerId') passengerId: string,@Param('flightId') flightId: string){
        return {
            status: 200,
            data: await flightsService.onboardPassenger(flightId, passengerId),
        }
    }
}
