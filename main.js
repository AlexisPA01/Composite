class Component {
  constructor(name) {
    this.name = name;
  }

  add(component) {}
  remove(component) {}
  getChild(index) {}
  operation() {}
}

class Leaf extends Component {
  constructor(name) {
    super(name);
  }

  operation() {
    console.log(`Operación en ${this.name}`);
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    return this.children[index];
  }

  operation() {
    console.log(`Operación en ${this.name}`);
    this.children.forEach((child) => {
      child.operation();
    });
  }
}

// Ejemplo de uso
const composite = new Composite("Composite");
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
composite.add(leaf1);
composite.add(leaf2);

const composite2 = new Composite("Composite 2");
const leaf3 = new Leaf("Leaf 3");
composite2.add(leaf3);

composite.add(composite2);

composite.operation();
