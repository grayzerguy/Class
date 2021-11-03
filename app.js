function Address(city, street, buildingNumber) {
  this.city = city;
  this.street = street;
  this.buildingNumber = buildingNumber;
}

Address.prototype.getFullAddress = function () {
  return `${this.city}, ${this.street}, ${this.buildingNumber}`;
};

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

function Customer(firstName, lastName, city, street, buildingNumber) {
  this.prrson = new Person(firstName, lastName);
  this.address = new Address(city, street, buildingNumber);
}

const customer1 = new Customer("Ivan", "Ivanov", "Lviv", "Shevchenko", "1");

console.log(customer1.prrson.fullName());
console.log(customer1.address.getFullAddress());

function Item(itemId, itemName, itemPrice) {
  this.itemId = itemId;
  this.itemName = itemName;
  this.itemPrice = itemPrice;
}

function Order(orderId, city, street, buildingNumber, firstName, lastName) {
  this.orderId = orderId;
  this.customer = new Customer(
    firstName,
    lastName,
    city,
    street,
    buildingNumber
  );
  this.items = [];
  this.addItemToOrder = function (itemId, itemName, itemPrice) {
    this.items.push(new Item(itemId, itemName, itemPrice));
  };
  this.getTotalPrice = function () {
    let totalPrice = 0;
    for (let i of this.items) {
      totalPrice += this.items[i].itemPrice;
    }
    return totalPrice;
  };
}

const item1 = new Item(1, "Milk", 10);
const item2 = new Item(2, "Bread", 5);
const item3 = new Item(3, "Cheese", 15);

const order1 = new Order(1, "Lviv", "Shevchenko", "1", "Ivan", "Ivanov");
console.log(order1.customer.prrson.fullName());
console.log(order1.customer.address.getFullAddress());
const order2 = new Order(2, "Lviv", "Shevchenko", "1", "Ivan", "Ivanov");
order2.addItemToOrder(1, "Milk", 10);
order2.addItemToOrder(2, "Bread", 5);
// console.log(order2.getTotalPrice());
