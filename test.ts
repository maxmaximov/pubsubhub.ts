///<reference path="PubSubHub.ts"/>

module Test {
    "use strict";

    var hub = new PubSubHub.Hub();

    function handler (data: any) {
        console.log(data);
    }

    hub.pub("ololo", 123);
    hub.sub("ololo", handler);
    hub.pub("ololo", 456);
    hub.unsub("ololo", handler);
    hub.pub("ololo", 789);
}
