const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
  const personCount = document.getElementById('person-count');
  personCount.innerHTML = person.message;

  const preson1 = document.getElementById('person1');
  person1.innerHTML = person.result[0].name.common;
  const person1Age = document.getElementById('p1-age');
  person1Age.innerHTML = person.result[0].age;
  const person1Address = document.getElementById('p1-address');
  person1Address.innerHTML = person.result[0].address.street;
  const person1Home = document.getElementById('p1-house');
  person1Home.innerHTML = person.result[0].address.house;
  

  const preson2 = document.getElementById('person2');
  person2.innerHTML = person.result[1].name.common;
  const person2Age = document.getElementById('p2-age');
  person2Age.innerHTML = person.result[1].age;
  const person2Address = document.getElementById('p2-address');
  person2Address.innerHTML = person.result[1].address.street;
  const person2Home = document.getElementById('p2-house');
  person2Home.innerHTML = person.result[1].address.house;

 





console.log(person.result[0].address.house);

  const displayResult = () => {

  }