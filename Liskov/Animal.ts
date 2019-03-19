export class Animal {
    constructor(public name) { }
    public move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}