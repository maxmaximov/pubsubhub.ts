///<reference path="IFunctionArrayHash.ts"/>

module com.maxmaximov {
    "use strict";

    export class PubSubHub {
        static private subscriptions: IFunctionArrayHash = {};

        static pub (name: string, data: any): void {
            var handlers: Function[];

            if (this.subscriptions[name]) {
                handlers = this.subscriptions[name];

                handlers.forEach(function (handler) {
                    handler(data);
                });
            }
        }

        static sub (name: string, handler: Function): void {
            if (!this.subscriptions[name]) {
                this.subscriptions[name] = [];
            }

            this.subscriptions[name].push(handler);
        }

        static unsub (name: string, handler: Function): void {
            var index: number = this.subscriptions[name].indexOf(handler);

            if (~index) {
                this.subscriptions[name].splice(index, 1);
            }

            if (this.subscriptions[name].length === 0) {
                delete this.subscriptions[name];
            }
        }
    }
}
