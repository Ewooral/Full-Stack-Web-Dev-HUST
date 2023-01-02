1. How to deploy React App onto GitHub

    https://youtu.be/j8AVXNozac8


2. How to Update Npm Packages Safely With Npm Check Updates

    https://chrispennington.blog/blog/how-to-update-npm-packages-safely-with-npm-check-updates/

    https://www.youtube.com/watch?v=0XQXGx3lLaU&ab_channel=CodinginPublic

3. email integration:
	const SparkPost = require('sparkpost');
const sparky = new SparkPost('<YOUR API KEY>');

sparky.transmissions.send({
    options: {
      sandbox: true
    },
    content: {
      from: 'testing@sparkpostbox.com',
      subject: 'Oh hey!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'developers+nodejs@sparkpost.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });
