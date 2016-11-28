            window.setInterval(timeStamp, 1000);
            window.setTimeout(timeStamp, 300000);

            function timeStamp() {
                var dateTime = new Date();
                console.log("Aktuelle Zeit: " + dateTime);
                if (dateTime.getSeconds() === 0) {
                    alert(dateTime);
                }
            }