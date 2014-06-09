var wsUri = "ws://192.168.1.22:8080/";
//var wsUri = "ws://127.0.0.1:8080/";

/****************************************************************************************
*
****************************************************************************************/
function startWebSocket()
{
	websocket = new WebSocket(wsUri);
	websocket.binaryType = 'arraybuffer';
	websocket.onopen = function(evt) { onOpen(evt) };
	websocket.onclose = function(evt) { onClose(evt) };
	websocket.onmessage = function(evt) { onMessage(evt) };
	websocket.onerror = function(evt) { onError(evt) };
}

/****************************************************************************************
*
****************************************************************************************/
function onOpen(evt)
{
	//writeToScreen("CONNECTED");
	websocket.send("DD");			// Passkey to activate USB accessory
}

/****************************************************************************************
*
****************************************************************************************/
function onClose(evt)
{
	//writeToScreen("DISCONNECTED");
}

/****************************************************************************************
*
****************************************************************************************/
function onMessage(evt)
{
	//writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
	//websocket.close();
	//document.write(evt.data.size);
	//alert(evt.data);
	var bufView = new Uint8Array(evt.data);
	//document.write(UInt8ArrayToString(bufView));
	if(bufView[0]==67)
		my_map.move(51.616065,-1.232925, bufView[1]*180/100  );
}

/****************************************************************************************
*
****************************************************************************************/
function onError(evt)
{ 
	//writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}



/****************************************************************************************
*
****************************************************************************************/
function convert(data) {
     return new UInt8Array(data);
}

/****************************************************************************************
* http://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript
****************************************************************************************/
function UInt8ArrayToString(uInt8Array)
{
    var s  = "[";
    for(var i = 0; i < uInt8Array.byteLength; i++)
    {
        if( i > 0 )
            s += ", ";
        s += uInt8Array[i];
    }
    s += "]";
    return s;
}

/* END */
