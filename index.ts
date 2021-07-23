interface User {
  type: 'user';
  name: string
  age: number;
}

interface Admin {
  type: 'admin';
  name: string;
  role: number
}

type Person = User | Admin;

const index: Person[]  = [
  {type: 'user', name: 'a', age: 55},
  {type: 'admin', name: 'a', role: 55},
]


function isUser(person: Person): person is User {
  return person.type === 'user'
}

index.forEach(person => {
  if(isUser(person)) {
    console.log(person.age)
  }
})
