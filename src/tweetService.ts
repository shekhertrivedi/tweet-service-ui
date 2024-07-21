import axios from 'axios';

const BASE_URL = 'http://localhost:8412/v0/tweets';

export interface Tweet {
    id: string; // Assuming your backend generates IDs as numbers
    message: string;
}

export async function createTweet(message: string): Promise<Tweet> {
    const response = await axios.post<Tweet>(BASE_URL, { message });
    return response.data;
}

export async function listTweets(): Promise<Tweet[]> {
    const response = await axios.get<Tweet[]>(BASE_URL);
    return response.data;
}