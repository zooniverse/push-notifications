
//1.  Uncomment the following with the environment you'd like to use
//var pusherSetup = require ('./prod-pusher-keys.js');
var pusherSetup = require ('./dev-pusher-keys.js');



//2. Fill out the following:
//to_notify can be "general" or the project ID
//project_id will show a link to the project if the user opens the notification and if the project is in the mobile-friendly list
var to_notify = "general"
var project_id = "21"
var title = "New Images on Galaxy Zoo"
var body = "We’re extremely excited to announce the release of a new dataset on Galaxy Zoo."



//////////////////////////////////
//DO NOT MODIFY BELOW THIS LINE!//
//////////////////////////////////
var PusherLibrary = require("pusher");
var pusher = new PusherLibrary(pusherSetup);

pusher.notify([to_notify], {
  apns: {
    aps: {
      alert: {
        title: title,
        body: body
      },
      category: "pusher"
    },
    data: {
        project_id: project_id,
    }
  },
});


pusher.notify([to_notify], {
  fcm: {
    notification: {
      title: title,
      body: body,
      icon: "ic_notification",
      color: "#00979D",
    },
    data: {
      title: title,
      body: body,
      project_id: project_id
    }
  },
});

