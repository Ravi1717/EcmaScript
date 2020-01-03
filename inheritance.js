class Pets{
    constructor(name){
        this.name=name;
    }
    present(){
        return 'i have a pet '+this.name;
    }
}
class Breed extends Pets{
    constructor(name,bred){
        super(name);
        this.bred=bred;
    }
    show(){
        return this.present() + ',my dog breed is '+this.bred;
    }
}
mybreed=new Breed('Dog','Labrador');
console.log(mybreed.show());