import { CreateUserParams, ICreateUserRepository } from "../../controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";

export class MongoCreateUser implements ICreateUserRepository {
    async createUser(params: CreateUserParams): Promise<User> {

        const { insertedId } = await MongoClient.db
        .collection<Omit<User, 'id'>>('users')
        .insertOne(params)

        const user = await MongoClient.db.collection('users').findOne({ _id: insertedId });

        if (!user) {
            throw new Error('User not created!')
        }
        
        const {_id, ... rest } = user;

        return {id: _id.toHexString(), ... rest};
    }

}