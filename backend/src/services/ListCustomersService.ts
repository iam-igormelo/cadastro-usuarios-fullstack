import prismaClient from "../lib/prisma.js";

class ListCustomersService {
    async execute() {
        const customers = await prismaClient.customer.findMany()

        return customers
    }
}

export { ListCustomersService }