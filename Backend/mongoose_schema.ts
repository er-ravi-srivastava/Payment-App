import mongoose, { Schema, Document, Model } from "mongoose";


interface UserDocument extends Document {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}


interface UserModel extends Model<UserDocument> {}

// Created a mongoose schema in TS
const userSchema: Schema<UserDocument> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Create a model for the schema
const User: UserModel = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User };