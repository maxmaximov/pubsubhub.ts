var test;
(function (test) {
    "use strict";
    var Hub = com.maxmaximov.PubSubHub;
    function handler(data) {
        console.log(data);
    }
    Hub.pub("ololo", 123);
    Hub.sub("ololo", handler);
    Hub.pub("ololo", 456);
    Hub.unsub("ololo", handler);
    Hub.pub("ololo", 789);
})(test || (test = {}));

