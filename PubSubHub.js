define(["require", "exports"], function(require, exports) {
    (function (PubSubHub) {
        var Hub = (function () {
            function Hub() {
                this.subscriptions = {
                };
            }
            Hub.prototype.pub = function (name, data) {
                var handlers;
                if(this.subscriptions[name]) {
                    handlers = this.subscriptions[name];
                    handlers.forEach(function (handler) {
                        handler(data);
                    });
                }
            };
            Hub.prototype.sub = function (name, handler) {
                if(!this.subscriptions[name]) {
                    this.subscriptions[name] = [];
                }
                this.subscriptions[name].push(handler);
            };
            Hub.prototype.unsub = function (name, handler) {
                var index = this.subscriptions[name].indexOf(handler);
                if(~index) {
                    this.subscriptions[name].splice(index, 1);
                }
            };
            return Hub;
        })();
        PubSubHub.Hub = Hub;        
    })(exports.PubSubHub || (exports.PubSubHub = {}));

})

