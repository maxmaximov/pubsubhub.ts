var test;
(function (test) {
    "use strict";
    var Hub = com.maxmaximov.Hub;
    function handler(data) {
        console.log(data);
    }
    console.log(com.maxmaximov.Hub.subscriptions);
    Hub.pub("ololo", 123);
    console.log(com.maxmaximov.Hub.subscriptions);
    Hub.sub("ololo", handler);
    console.log(com.maxmaximov.Hub.subscriptions);
    Hub.pub("ololo", 456);
    console.log(com.maxmaximov.Hub.subscriptions);
    Hub.unsub("ololo", handler);
    console.log(com.maxmaximov.Hub.subscriptions);
    Hub.pub("ololo", 789);
    console.log(com.maxmaximov.Hub.subscriptions);
})(test || (test = {}));

