import type { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService.js";

class ListCustomersController {
    async handle(request:FastifyRequest, reply:FastifyReply) {
        const listCustomersService = new ListCustomersService()

        const listCustomers = await listCustomersService.execute()

        reply.send(listCustomers)
    }
}

export { ListCustomersController }