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
    onWebComponentsReady: function () {
      console.group('FP: DEBUG INSTRUCTIONS');
      console.log('To start debugging, ensure the following: ');
      console.log('(Valid only for the given session) Which means you need to ensure everytime you close and start the app');
      console.info('1 > http-server running on port 8080 at fonepush/public/ui ');
      console.info('2 > node app.js has been started');
      console.info('3 > Run the below command on your console window');
      console.log('sessionStorage.setItem("ip", "YOUR_IP")');
      console.log('sessionStorage.setItem("debug", true)');
      console.groupEnd();

      //Get the default localhost ip
      var IP = sessionStorage.getItem('ip') || '192.168.1.7';

      if (!window.location.hostname) {
        //FP-Debug: Step: 1 Set your local ip
        window.location.hostname = IP;

        console.log('FP: Serving from: ' + IP);
      }

      var path = 'https://rawgit.com/mohanaravind/fpbundle/master/build/fp-app.build.html';

      if (sessionStorage.getItem('debug')) {
        path = 'http://' + IP + ':8080/elements/fp-app/fp-app.html';
      }

      var link = document.createElement('link');
      link.rel = 'import';
      link.href = path;

      document.body.appendChild(link);
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        //Default is to look for localhost and fallback on prod
        document.addEventListener('WebComponentsReady', this.onWebComponentsReady);
    },

    /**
    * deviceready Event Handler
    **/
    onDeviceReady: function() {
        app.deviceready = true;
        if (app.componentready){
            console.log('app ready');
        }
    },

    /**
    * This is called when the app is loaded.aka-Web components are ready
    *
    **/
    signalReady: function (){
        app.componentready = true;
        if (app.deviceready) {
            console.log('device ready');
        }
    }
};
