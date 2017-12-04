var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'This is a test donation', duration: 3000});
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'How is the work going?',  // message
        dialogDismissed,         // callback
        'Youre in a lecture!',            // title
        ['Alright :L', 'Hungry atm', 'Bad :(']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Good, keep at it!", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Get to the cafe!', duration: 3000});
    else if(buttonIndex==3) new Toast({content: 'Take a rest then...', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 30000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Done eating?",
        message: 	"Best get back to work!",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}