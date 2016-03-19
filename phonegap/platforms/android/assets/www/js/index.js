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
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //
        // document.addEventListener("resume", onResume, false);
        //
        // var diagnostic = cordova.plugins.diagnostic;
        //
        // function requestPermissions () {
        //   var onSuccess = function (status) {
        //     console.log(status);
        //   };
        //
        //   var onError = function (error) {
        //     console.log(error);
        //   };
        //
        //   diagnostic.requestRuntimePermission(onSuccess, onError, diagnostic.runtimePermission.READ_CONTACTS);
        // }
        //
        // document.getElementById('pick').addEventListener('click', function () {
        //   diagnostic.getPermissionAuthorizationStatus(function(status){
        //       switch(status){
        //           case cordova.plugins.diagnostic.runtimePermissionStatus.GRANTED:
        //               console.log("Permission granted to use the camera");
        //
        //               navigator.contacts.pickContact(onResume, onResume);
        //               break;
        //           case cordova.plugins.diagnostic.runtimePermissionStatus.NOT_REQUESTED:
        //               console.log("Permission to use the camera has not been requested yet");
        //
        //               requestPermissions();
        //               break;
        //           case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED:
        //               console.log("Permission denied to use the camera - ask again?");
        //               break;
        //           case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED_ALWAYS:
        //               console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
        //               break;
        //       }
        //   }, function(error){
        //       console.error("The following error occurred: "+error);
        //   }, diagnostic.runtimePermission.READ_CONTACTS);

          // navigator.contacts.pickContact(onResume, onResume);
        // });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
