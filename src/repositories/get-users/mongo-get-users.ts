import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db.collection<User>('users').find({}).toArray();

        users[0].

        return [
            {
            firstName: "Caio",
            lastName: "Schwab",
            email: "caio@email.com",
            password: "123",
        },
    ];
    }

}
