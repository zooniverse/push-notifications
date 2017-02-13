# Zooniverse Push Notifications for both Android and iOS

## To set up
1. npm install
2. Retrieve Pusher App ID, Key and Secret from the Production Github Repository 
3. Copy the prod-pusher-keys.js.example file to prod-pusher-keys.js
4. Repeat to create a file dev-pusher-keys.js
5. Update each file with values from the Production repo


## To edit message
1.  Edit the appropriate lines in send-push.js (file contains instructions)


## To monitor notifications sent (optional)
Prior to sending the notification, you may open the pusher console to see how many notifications were pushed

1.  Log into https://dashboard.pusher.com/ (credentials in Production repo) 
2.  Click Your Apps -> choose either zooniverse-mobile-dev or zooniverse-mobile (for prod)
3.  Click "Debug Console", choose 'Push Notifications'
4.  Events will show up if the push notification is sent successfully


## To send notification
1.  node send-push.js

