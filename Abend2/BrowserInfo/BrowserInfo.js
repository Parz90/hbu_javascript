            function bName()
            {
                var x = navigator.appName;
                document.getElementById("name").innerHTML = x;
            }
            
            function bVersion()
            {
                var x = navigator.appVersion;
                document.getElementById("version").innerHTML = x;
            }
            
            function bPlatform()
            {
                var x = navigator.platform;
                document.getElementById("platform").innerHTML = x;
            }
            
            function bUserAgent()
            {
                var x = navigator.userAgent;
                document.getElementById("userAgent").innerHTML = x;
            }