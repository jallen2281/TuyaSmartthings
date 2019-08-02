/*
TuyAPI Smart Power Strip node.js

Version 2.0

*/

//##### Options for this program ###################################
var logFile = "yes"	//	Set to no to disable error.log file.
var hubPort = 8083	//	Synched with Device Handlers.
//##################################################################

//---- Determine if old Node version, act accordingly -------------
console.log("Node.js Version Detected:   " + process.version)
var oldNode = "no"
if (process.version == "v6.0.0-pre") {
	oldNode ="yes"
	logFile = "no"
}

//---- Program set up and global variables -------------------------
var debug = require('debug')('homebridge-tuya')
var http = require('http')
var net = require('net')
var fs = require('fs')
const TuyaDevice = require('tuyapi')

var server = http.createServer(onRequest)

//---- Start the HTTP Server Listening to SmartThings --------------
server.listen(hubPort)
console.log("TuyAPI Hub Console Log")
logResponse("\n\r" + new Date() + "\rTuyAPI Hub Error Log")
process.on('unhandledRejection', function(err, promise) {
    console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
});

//---- Command interface to Smart Things ---------------------------
function onRequest(request, response){
	var command = 	request.headers["command"]
	var deviceIP = 	request.headers["tuyapi-ip"]
	
	var cmdRcvd = "\n\r" + new Date() + "\r\nIP: " + deviceIP + " sent command " + command
	console.log(" ")
	console.log(cmdRcvd)
		
	switch(command) {
		//---- (BridgeDH - Poll for Server APP ------------------
		case "pollServer":
			response.setHeader("cmd-response", "ok")
			response.end()
			var respMsg = "Server Poll response sent to SmartThings"
			console.log(respMsg)
		break

		//---- TP-Link Device Command ---------------------------
		case "deviceCommand":
			processDeviceCommand(request, response)
			break
	
		default:
			response.setHeader("cmd-response", "InvalidHubCmd")
			response.end()
			var respMsg = "#### Invalid Command ####"
			var respMsg = new Date() + "\n\r#### Invalid Command from IP" + deviceIP + " ####\n\r"
			console.log(respMsg)
			logResponse(respMsg)
	}
}

//---- Send deviceCommand and send response to SmartThings ---------
function processDeviceCommand(request, response) {
	
	var deviceIP = request.headers["tuyapi-ip"]
	var deviceID = request.headers["tuyapi-devid"]
	var localKey = request.headers["tuyapi-localkey"]
	var command =  request.headers["tuyapi-command"]
	var sn = request.headers["switch"] 

	var respMsg = "deviceCommand sending to IP: " + deviceIP + " Command: " + command
	console.log(respMsg)

	var tuya = new TuyaDevice({
	  type: 'outlet',
	  ip: deviceIP,
	  id: deviceID,
	  key: localKey
	});

	switch(command) {
		case "off6":
			tuya.set({dps:6, set: false}).then(() => {
		          console.log('All outlets were turned OFF');
				  response.setHeader("tuyapi-onoff", "off");
		          response.setHeader("switch", "6");
				  response.end();
				  console.log("Status (off) sent to SmartThings.");
			});
		break

		case "on6":
			tuya.set({dps:6, set: true}).then(() => {
		          console.log('All outlets were turned on');
		          response.setHeader("tuyapi-onoff", "on");
		          response.setHeader("switch", "6");
				  response.end();
				  console.log("Status (on) sent to SmartThings.");
			});		
		break
		case "off1":
			tuya.set({dps:1, set: false}).then(() => {
		          console.log('Outlet 1 was turned OFF');
				  response.setHeader("tuyapi-onoff", "off");
				  response.setHeader("switch", "1");
				  response.end();
				  console.log("Status (off) sent to SmartThings.");
			});
		break

		case "on1":
			tuya.set({dps:1, set: true}).then(() => {
		          console.log('Outlet 2 was turned on');
		          response.setHeader("tuyapi-onoff", "on");
				  response.setHeader("switch", "1");
				  response.end();
				  console.log("Status (on) sent to SmartThings.");
			});		
		break
		case "off2":
			tuya.set({dps:2, set: false}).then(() => {
		          console.log('Outlet 2 was turned OFF');
				  response.setHeader("tuyapi-onoff", "off");
				  response.setHeader("switch", "2");
				  response.end();
				  console.log("Status (off) sent to SmartThings.");
			});
		break

		case "on2":
			tuya.set({dps:2, set: true}).then(() => {
		          console.log('Outlet 2 was turned on');
		          response.setHeader("tuyapi-onoff", "on");
				  response.setHeader("switch", "2");
				  response.end();
				  console.log("Status (on) sent to SmartThings.");
			});		
		break
		case "off3":
			tuya.set({dps:3, set: false}).then(() => {
		          console.log('Outlet 3 was turned OFF');
				  response.setHeader("tuyapi-onoff", "off");
				  response.setHeader("switch", "3");
				  response.end();
				  console.log("Status (off) sent to SmartThings.");
			});
		break

		case "on3":
			tuya.set({dps:3, set: true}).then(() => {
		          console.log('Outlet 3 was turned on');
		          response.setHeader("tuyapi-onoff", "on");
				  response.setHeader("switch", "3");
				  response.end();
				  console.log("Status (on) sent to SmartThings.");
			});		
		break
		case "off4":
			tuya.set({dps:4, set: false}).then(() => {
		          console.log('Outlet 4 was turned OFF');
				  response.setHeader("tuyapi-onoff", "off");
				  response.setHeader("switch", "4");
				  response.end();
				  console.log("Status (off) sent to SmartThings.");
			});
		break

		case "on4":
			tuya.set({dps:4, set: true}).then(() => {
		          console.log('Outlet 4 was turned on');
		          response.setHeader("tuyapi-onoff", "on");
				  response.setHeader("switch", "4");
				  response.end();
				  console.log("Status (on) sent to SmartThings.");
			});		
		break
		case "off5":
			tuya.set({dps:5, set: false}).then(() => {
		          console.log('Outlet 5 was turned OFF');
				  response.setHeader("tuyapi-onoff", "off");
				  response.setHeader("switch", "5");
				  response.end();
				  console.log("Status (off) sent to SmartThings.");
			});
		break

		case "on5":
			tuya.set({dps:5, set: true}).then(() => {
		          console.log('Outlet 5 was turned on');
		          response.setHeader("tuyapi-onoff", "on");
				  response.setHeader("switch", "5");
				  response.end();
				  console.log("Status (on) sent to SmartThings.");
			});		
		break

		case "status":
			tuya.get({schema: true}).then(data => {
				var state = JSON.stringify(data.dps);
				state = state.replace(/true/g, "\"on\"");
				state = state.replace(/false/g, "\"off\"");
				state = state.replace(/0/g, "\"off\"");
 			   	console.log(state);
				response.setHeader("cmd-response", state );
				response.end();
  			}).catch(error => {
    			console.log('Caught ya:', error.message);
  			});
				
				/*{
				console.log(data);
				if (status == true) {
					status = "on";
				} else {
					status = "off";
				}*/
			//	console.log(poop);

	//		});
		break

		default:
			console.log('Unknown request');
	
	}  	
}

//----- Utility - Response Logging Function ------------------------
function logResponse(respMsg) {
	if (logFile == "yes") {
		fs.appendFileSync("error.log", "\r" + respMsg)
	}
}
