function Service(appClient) {
  this.appClient = appClient;
}

Service.prototype.connect = function() {
  // TODO connect to iotf here with this.appClient

  this.appClient.on('connect', function() {
    // TODO hook up device events here with this.appClient
  }.bind(this));

  // TODO act on device events and call handleTempEvent when the right type of event arrives
};

Service.prototype.handleTempEvent = function(temp) {
  // handle temperature changes here and call this.warningOn/this.warningOff accordingly
};

Service.prototype.warningOn = function() {
  // TODO send a device commmand here
};

Service.prototype.warningOff = function() {
  // TODO send a device commmand here
};

module.exports = Service;
