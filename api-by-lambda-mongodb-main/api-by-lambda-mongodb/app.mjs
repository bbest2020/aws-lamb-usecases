import { MongoClient } from 'mongodb'

const url = "mongodb+srv://mongouser:S5SBvr5DBLjneCCL@connectiontestingcluste.nqxzmx3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

export const fetchAllUsers = async (event, context) => {
    
    try {
        console.log("In progress to create a mongo db connection");
        await client.connect();
        const userCollection =  client.db("peering-connect-db").collection("user");
        //const cursor =  await userCollection.find({});  
        let users = [];
        await userCollection.find({}).forEach(user => users.push(user));
        const res = {
            'statusCode': 200,
            'body': JSON.stringify(users)
        }
        console.log(res);
        return res;

    } catch (err) {
        console.log(err);
        return err;
    }
};

export const fetchAllUsers2 = async (event, context) => {
    
    try {
        console.log("In progress to create a mongo db connection");
        await client.connect();
        const userCollection =  client.db("peering-connect-db").collection("user");
        //const cursor =  await userCollection.find({});  
        let users = [];
        await userCollection.find({}).forEach(user => users.push(user));
        const res = {
            'statusCode': 200,
            'body': JSON.stringify(users)
        }
        console.log(res);
        return res;

    } catch (err) {
        console.log(err);
        return err;
    }
};

//fetchAllUsers(null, null);
