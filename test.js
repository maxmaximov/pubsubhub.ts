var Test;
(function (Test) {
    var hub = new PubSubHub.Hub();
    function handler(data) {
        console.log(data);
    }
    hub.pub("ololo", 123);
    hub.sub("ololo", handler);
    hub.pub("ololo", 456);
    hub.unsub("ololo", handler);
    hub.pub("ololo", 789);
})(Test || (Test = {}));

