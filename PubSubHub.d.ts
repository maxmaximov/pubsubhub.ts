module PubSubHub {
    export class Hub {
        private subscriptions;
        constructor ();
        public pub(name: string, data: any): void;
        public sub(name: string, handler: Function): void;
        public unsub(name: string, handler: Function): void;
    }
}
