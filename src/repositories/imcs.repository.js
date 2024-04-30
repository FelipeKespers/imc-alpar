import { PrismaClient } from "@prisma/client";

export class ImcsRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async createImc({ name, result }) {
        const imc = await this.prisma.imc.create({
            data: {
                name,
                result,
            }
        });
        return imc;
    }
    

    async getImcs() {
        const imcs = await this.prisma.imc.findMany();
        return imcs;
    }

    async updateImc({ id, name, result }) {
        const imc = await this.prisma.imc.update({
            where: {
                id: id,
            },
            data: {
                name,
                result,
            }
        });

        return imc;
    }

    async deleteImc(id) {
        await this.prisma.imc.delete({
            where: {
                id,
            }
        })
    }
}