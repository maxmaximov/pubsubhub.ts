var com;
(function (com) {
    (function (maxmaximov) {
        "use strict";
        var Hub = (function () {
            function Hub() { }
            Hub.subscriptions = {
            };
            Hub.pub = function pub(name, data) {
                var handlers;
                if(this.subscriptions[name]) {
                    handlers = this.subscriptions[name];
                    handlers.forEach(function (handler) {
                        handler(data);
                    });
                }
            }
            Hub.sub = function sub(name, handler) {
                if(!this.subscriptions[name]) {
                    this.subscriptions[name] = [];
                }
                this.subscriptions[name].push(handler);
            }
            Hub.unsub = function unsub(name, handler) {
                var index = this.subscriptions[name].indexOf(handler);
                if(~index) {
                    this.subscriptions[name].splice(index, 1);
                }
                if(this.subscriptions[name].length === 0) {
                    delete this.subscriptions[name];
                }
            }
            return Hub;
        })();
        maxmaximov.Hub = Hub;        
    })(com.maxmaximov || (com.maxmaximov = {}));
    var maxmaximov = com.maxmaximov;

})(com || (com = {}));

