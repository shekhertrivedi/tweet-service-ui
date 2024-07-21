import { createTweet, listTweets, Tweet } from './tweetService';

const form = document.getElementById('tweetForm') as HTMLFormElement;
const messageInput = document.getElementById('message') as HTMLTextAreaElement;
const tweetList = document.getElementById('tweetList') as HTMLUListElement;


form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        try {
            const newTweet = await createTweet(message);
            console.log('Created Tweet:',newTweet);
            messageInput.value = '';
            addTweetToList(newTweet);
        } catch (error) {
            console.error('Error creating tweet:', error);
        }
    }
})

function addTweetToList(tweet: Tweet) {
    const listItem = document.createElement('li');
    listItem.textContent = tweet.message;
    tweetList.appendChild(listItem);
}

async function loadTweets() {
    try {
        const tweets = await listTweets();
        tweets.forEach(addTweetToList);
    } catch (error) {
        console.error('Error fetching tweets:', error);
    }
}

window.onload = loadTweets;