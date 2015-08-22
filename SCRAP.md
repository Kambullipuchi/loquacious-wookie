
## Run complex examples of JS

----------------------

### Check How to find RTT

----------------------

### Below could be used for RTT

var image = canvas2DContext.getImageData(0, 0, 440, 300);
var binary_data = new Uint8Array(image.data.length);
for (var i = 0; i < image.data.length; i++) {
  binary_data[i] = image.data[i];
}
connection.send(binary_data.buffer);

----------------------

### Search for Blob, ArrayBuffer, Image objects

----------------------

### udacity JS tutorials

----------------------

### BrazilJS Conf github/remote-control - take this as an example