/*
TuyAPI SmartPlug Device Handler

Derived from
	TP-Link HS Series Device Handler
	Copyright 2017 Dave Gutheinz


Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:
		http://www.apache.org/licenses/LICENSE-2.0
		
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Supported models and functions:  This device supports smart plugs that use the Tuya Smart Life app

Update History
01-04-2018	- Initial release
*/
metadata {
	definition (name: "TuyAPI SmartStrip", namespace: "jallen2281", author: "jallen2281") {
		capability "Switch"
		capability "Configuration"
		capability "refresh"
		capability "polling"
		capability "Sensor"
		capability "Actuator"

		attribute "switch1", "string"
		attribute "switch2", "string"
		attribute "switch3", "string"
		attribute "switch4", "string"
		attribute "switch5", "string"
		attribute "switch", "string"

		command "on"
		command "off"

		command "on1"
		command "off1"
		command "on2"
		command "off2"
		command "on3"
		command "off3"
		command "on4"
		command "off4"
		command "on5"
		command "off5"
		
		command "configure"

		command "setCurrentDate"
	}

	tiles(scale: 2) {

		standardTile("switch1", "device.switch1", width: 6, height: 1, canChangeIcon: true, label: "Outlet 1") {
    	    	state "on", label:'${name}', action:"off1", icon:"st.switches.switch.on", backgroundColor:"#00a0dc",nextState:"turningOff"
				state "off", label:'${name}', action:"on1", icon:"st.switches.switch.off", backgroundColor:"#ffffff",nextState:"waiting"
				state "turningOff", label:'waiting', action:"off1", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"waiting"
				state "waiting", label:'${name}', action:"on1", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"turningOff"
				state "offline", label:'Comms Error', action:"on1", icon:"st.switches.switch.off", backgroundColor:"#e86d13",nextState:"waiting"
			}
	   	standardTile("switch2", "device.switch2", width: 6, height: 1, canChangeIcon: true, label: "Outlet 2") {
	        	state "on", label:'${name}', action:"off2", icon:"st.switches.switch.on", backgroundColor:"#00a0dc",nextState:"turningOff"
				state "off", label:'${name}', action:"on2", icon:"st.switches.switch.off", backgroundColor:"#ffffff",nextState:"waiting"
				state "turningOff", label:'waiting', action:"off2", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"waiting"
				state "waiting", label:'${name}', action:"on2", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"turningOff"
				state "offline", label:'Comms Error', action:"on2", icon:"st.switches.switch.off", backgroundColor:"#e86d13",nextState:"waiting"
			}
	   	standardTile("switch3", "device.switch3", width: 6, height: 1, canChangeIcon: true, label: "Outlet 3") {
	        	state "on", label:'${name}', action:"off3", icon:"st.switches.switch.on", backgroundColor:"#00a0dc",nextState:"turningOff"
				state "off", label:'${name}', action:"on3", icon:"st.switches.switch.off", backgroundColor:"#ffffff",nextState:"waiting"
				state "turningOff", label:'waiting', action:"off3", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"waiting"
				state "waiting", label:'${name}', action:"on3", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"turningOff"
				state "offline", label:'Comms Error', action:"on3", icon:"st.switches.switch.off", backgroundColor:"#e86d13",nextState:"waiting"
			}
	   	standardTile("switch4", "device.switch4", width: 6, height: 1, canChangeIcon: true, label: "Outlet 4") {
	        	state "on", label:'${name}', action:"off4", icon:"st.switches.switch.on", backgroundColor:"#00a0dc",nextState:"turningOff"
				state "off", label:'${name}', action:"on4", icon:"st.switches.switch.off", backgroundColor:"#ffffff",nextState:"waiting"
				state "turningOff", label:'waiting', action:"off4", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"waiting"
				state "waiting", label:'${name}', action:"on4", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"turningOff"
				state "offline", label:'Comms Error', action:"on4", icon:"st.switches.switch.off", backgroundColor:"#e86d13",nextState:"waiting"
			}
	   	standardTile("switch5", "device.switch5", width: 6, height: 1, canChangeIcon: true, label: "USB Outlets") {
	        	state "on", label:'${name}', action:"off5", icon:"st.switches.switch.on", backgroundColor:"#00a0dc",nextState:"turningOff"
				state "off", label:'${name}', action:"on5", icon:"st.switches.switch.off", backgroundColor:"#ffffff",nextState:"waiting"
				state "turningOff", label:'waiting', action:"off5", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"waiting"
				state "waiting", label:'${name}', action:"on5", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"turningOff"
				state "offline", label:'Comms Error', action:"on5", icon:"st.switches.switch.off", backgroundColor:"#e86d13",nextState:"waiting"
			}
		standardTile("switch", "device.switch", width: 6, height: 4, canChangeIcon: true) {
    	    	state "on", label:'${name}', action:"off", icon:"st.switches.switch.on", backgroundColor:"#00a0dc",nextState:"turningOff"
				state "off", label:'${name}', action:"on", icon:"st.switches.switch.off", backgroundColor:"#ffffff",nextState:"waiting"
				state "turningOff", label:'${name}', action:"off", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"waiting"
				state "waiting", label:'${name}', action:"on", icon:"st.switches.switch.on", backgroundColor:"#15EE10",nextState:"turningOff"
				state "offline", label:'Comms Error', action:"on", icon:"st.switches.switch.off", backgroundColor:"#e86d13",nextState:"waiting"
			}
		standardTile("refresh", "capability.refresh", width: 3, height: 2,  decoration: "flat") {
			state "default", label:"Refresh", action:"refresh.refresh", icon:"st.secondary.refresh"
		}
        main("switch", "switch1", "switch2", "switch3", "switch4", "switch5")
        details("switch", "switch1", "switch2", "switch3", "switch4", "switch5", "refresh")
	}
}

preferences { 
	section{
    input(name: "deviceIP", type: "text", title: "Device IP", required: true, displayDuringSetup: true)
	input(name: "gatewayIP", type: "text", title: "Gateway IP", required: true, displayDuringSetup: true)
	input(name: "deviceID", type: "text", title: "Device ID", required: true, displayDuringSetup: true)
	input(name: "localKey", type: "text", title: "Local Key", required: true, displayDuringSetup: true)
    }
}

def installed() {
	updated()
}

def updated() {
	unschedule()
	runEvery15Minutes(refresh)
	runIn(1, refresh)
}
//	----- BASIC PLUG COMMANDS ------------------------------------
def on1() { swOn(1) } 
def off1() { swOff(1) }
def on2() { swOn(2) }
def off2() { swOff(2) }
def on3() { swOn(3) }
def off3() { swOff(3) }
def on4() { swOn(4) }
def off4() { swOff(4) }
def on5() { swOn(5) }
def off5() { swOff(5) }

def on() {
	sendCmdtoServer("on", "6", "deviceCommand", "onOffResponse")
}

def off() {
	sendCmdtoServer("off", "6", "deviceCommand", "onOffResponse")
}

def swOn(port) {
	sendCmdtoServer("on", port, "deviceCommand", "onOffResponse")

}

def swOff(port) {
	sendCmdtoServer("off", port, "deviceCommand", "onOffResponse")
}

def onOffResponse(response){
	if (response.headers["cmd-response"] == "TcpTimeout") {
		log.error "$device.name $device.label: Communications Error"
		sendEvent(name: "switch", value: "offline", descriptionText: "ERROR - OffLine - mod onOffResponse")
	} else {
        def cmd = response.headers["tuyapi-onoff"]
        def sw = response.headers["switch"]
		sw = sw.replaceAll("^\"|\"\$", "")          
        log.info "${device.name} ${device.label}: Power: ${status} Command: ${cmd}"
        if(sw=="6"){
			sendEvent(name: "switch", value: "${cmd}" )
		} else {
   			sendEvent(name: "switch"+sw, value: "${cmd}" )
		}
		//	sendEvent(name: (sw==6 ? "switch": "switch"+sw), value: cmd)
		
	}
    	//refresh()
}


//	----- REFRESH ------------------------------------------------
def refresh(){
	//sendEvent(name: "switch"+num, value: "waiting", isStateChange: true)
	sendCmdtoServer("status", "6", "deviceCommand", "refreshResponse")
}

def refreshResponse(response){
	if (response.headers["cmd-response"] == "TcpTimeout") {
		log.error "$device.name $device.label: Communications Error"
		sendEvent(name: "switch", value: "offline", descriptionText: "ERROR - OffLine - mod onOffResponse")
	} else {
    log.debug "res:"+response.headers["cmd-response"]
    def jsonSlurper = new JsonSlurper()
  	def status = jsonSlurper.parseText(response.headers["cmd-response"])
    assert status instanceof Map

	status.each {k,v ->
    v = v.replaceAll("^\"|\"\$", "")
    
    log.info "${device.name} ${device.label}:Outlet: ${k} Power: ${v}"
    if(k=="6"){
	sendEvent(name: "switch", value: "${v}" )
	} else {
   	sendEvent(name: "switch"+k, value: "${v}" )
	}		
	}
  }
}
//	----- SEND COMMAND DATA TO THE SERVER -------------------------------------
private sendCmdtoServer(command, port, hubCommand, action){
	def headers = [:] 
	headers.put("HOST", "$gatewayIP:8083")	//	SET TO VALUE IN JAVA SCRIPT PKG.
	headers.put("tuyapi-ip", deviceIP)
	headers.put("tuyapi-devid", deviceID)
	headers.put("tuyapi-localkey", localKey)
    if(command != "status"){
	headers.put("tuyapi-command", command+port)
    } else {
    headers.put("tuyapi-command", status)
    headers.put("switch", port)
    }
	headers.put("command", hubCommand)
	sendHubCommand(new physicalgraph.device.HubAction([
		headers: headers],
		device.deviceNetworkId,
		[callback: action]
	))
}
