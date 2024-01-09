import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
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