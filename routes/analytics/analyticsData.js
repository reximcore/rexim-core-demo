exports.processAnalyticsData = function(socket){

	/*var url = data.url;
	var ip = socket.handshake.address.address;
	var referrer = data.referrer;*/
	var activeUsers = Object.keys(IO.connected).length;
	var clientId = socket.id;

	socket.on('analyticsData',function(data){	
  			  data.pageData.activeUsers = activeUsers;
  			  data.clientId = clientId;
  			  console.log(data);
	      });

	/*console.log("Analytics data loaded........"+ url);
	console.log("Analytics data loaded........"+ ip);
	console.log("Analytics data loaded........"+ referrer);
	console.log("Analytics data loaded........"+ activeUsers);*/




}