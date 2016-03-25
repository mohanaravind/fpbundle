/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    componentready: false,
    deviceready: false,
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    /**
    * deviceready Event Handler
    **/
    onDeviceReady: function() {        
        app.deviceready = true;
        if (app.componentready){
            app.initPush();    
        }
    },
    
    /**
    * This is called when the app is loaded.aka-Web components are ready
    *
    **/
    signalReady: function (){      
        app.componentready = true;
        if (app.deviceready) {
            app.initPush();
        }
    },

    /**
    * Prepare the device app to receive Push notifications from GCM service 
    * @doc  https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md
    **/
    initPush: function (){
        //Initialize Push notification with options for android.
        // android.senderID - Maps to the project number in the Google Developer Console.
        // Want to create new Project? https://console.cloud.google.com
        var push = PushNotification.init({ "android": {"senderID": "131586736374"}});
        // var push = PushNotification.init({ "android": {"senderID": "131586736374"},
        //             "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );
        
        //Event listener when the device finishes registration with the GCM service
        push.on('registration', function(data) {
            // This registration key is a secret and unique to each device.
            // Ask fp-app to persist it. 
            // This will be used by the node app.js process to push notifications 
            // to this device via GCM
            var fpapp = document.getElementById('mainapp');
            fpapp.registerdevicePushkey(data.registrationId);
        });

        // Event listener notification arrival
        push.on('notification', function(data) {
            //Displays an alert if the app is open
            alert(data.title+" Message: " +data.message);          
        });

        // Event listener for notification failure
        push.on('error', function(e) {
            console.log(e.message);
        });
    }
};
