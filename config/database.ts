// src/database.ts
import mongoose from 'mongoose';

export const connectToDatabase = async (uri: string): Promise<void> => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Handle the error appropriately. You might want to exit the process in case of a failure.
        process.exit(1);
    }
};
