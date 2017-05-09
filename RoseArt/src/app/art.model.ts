export class FirebaseFlatSnapshot {
     $key: string;

     constructor(obj?: any) {
        if (obj && obj.$key) {
            this.$key = obj.$key;
        }
     }
}

export class Art extends FirebaseFlatSnapshot {
    title: string;
    author: string;
    url: string;

    constructor(obj?: any) {
         super(obj);
         this.title= obj && obj.title || "";
         this.author = obj && obj.author || "";
         this.url = obj && obj.url || "";
     }
}
