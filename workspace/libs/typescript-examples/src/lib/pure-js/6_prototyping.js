// https://www.youtube.com/watch?v=R3xoMCjP3Tk&ab_channel=AngularNYC
function Mammal(name) {
  this.name = name;
  this.getName = function () {
    return `${getNamePrivate()} ${this.name}`;
  };

  function getNamePrivate() {
    return name;
  }
}

Mammal.prototype.setName = function (name) {
  this.name = name;
};

function Human(name, id) {
  Mammal.call(this, name);
  this.id = id;
  this.getId = function () {
    return id;
  };
}

Human.prototype = Object.create(Mammal.prototype);
//Human.prototype.constructor = Mammal;

const t1 = new Mammal('Lion');
console.log(t1.getName());

const t2 = new Human('Edo', '1234');
console.log(t2.getName());
//t2.__proto__ = t1; // -> Don't do this, would share the reference

t2.setName('lololol');
console.log(t2.getName());
