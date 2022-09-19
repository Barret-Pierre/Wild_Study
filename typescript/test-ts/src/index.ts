// challenge.ts

interface IUser {
    name: string
    age: number
    birthday?: string
}
const prettyPrintWilder = (users: IUser[]) :void => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders: IUser[] = [];
  const user1: IUser = { name: "Pierre", age: 23 };
  const user2: IUser = { name: "Paul", age: 32, birthday: "10/02/1990"};
  const user3: IUser = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);