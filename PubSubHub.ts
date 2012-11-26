module PubSubHub {
    "use strict";

    interface IFunctionArrayHash {
        [name: string]: Function[];
    }

    export class Hub {
        private subscriptions: IFunctionArrayHash = {};

        constructor () {
        }

        pub (name: string, data: any) {
            var handlers: Function[];

            if (this.subscriptions[name]) {
                handlers = this.subscriptions[name];
                handlers.forEach(function (handler) {
                    handler(data);
                });
            }
        }

        sub (name: string, handler: Function) {
            if (!this.subscriptions[name]) {
                this.subscriptions[name] = [];
            }
            this.subscriptions[name].push(handler);
        }

        unsub (name: string, handler: Function) {
            var index: number = this.subscriptions[name].indexOf(handler);
            if (~index) {
                this.subscriptions[name].splice(index, 1);
            }
        }
    }
}
