// let userName: string = "a";
// let numberA: number = 10;
// let isMale: boolean = false;
// let isNull: null = null;
// let isUndefiend: undefined = undefined;

// // Tạo mảng
// const array: number[] = [1, 2, 3, 34];
// const userNames: string[] = ["a", "b"];
// const userName1: any = ["a", "b", 10, true, undefined];

// // Tạo hàm
// // Hàm cần trả về giá trị
// const getName = (): string => {
//   return "Nguyễn Văn A";
// };

// // Hàm không trả về giá trị
// const logger = (): void => {
//   console.log("Nguyễn Văn B");
// };

// const { name1, age } = {
//   name1: "Nguyễn Văn A",
//   age: 12,
// };

// const array1: number[] = [1, 2, 3, 4];
// const array2: number[] = [5, 6, 78];

// const concatArr = [...array1, ...array2];
// console.log(concatArr);

// console.log(userName);
// console.log(numberA);

let users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Female",
    age: 42,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
  {
    id: 4,
    first_name: "Madella",
    last_name: "Kliesl",
    email: "mkliesl3@ft.com",
    gender: "Female",
    age: 56,
    salary: 5248,
  },
  {
    id: 5,
    first_name: "Simona",
    last_name: "Knee",
    email: "sknee4@sciencedaily.com",
    gender: "Female",
    age: 61,
    salary: 14376,
  },
  {
    id: 6,
    first_name: "Cord",
    last_name: "McMurthy",
    email: "cmcmurthy5@wordpress.org",
    gender: "Male",
    age: 86,
    salary: 9514,
  },
  {
    id: 7,
    first_name: "Obed",
    last_name: "Beaven",
    email: "obeaven6@msn.com",
    gender: "Male",
    age: 91,
    salary: 18463,
  },
  {
    id: 8,
    first_name: "Elayne",
    last_name: "Smeuin",
    email: "esmeuin7@wsj.com",
    gender: "Female",
    age: 96,
    salary: 19907,
  },
  {
    id: 9,
    first_name: "Robin",
    last_name: "Picford",
    email: "rpicford8@typepad.com",
    gender: "Female",
    age: 55,
    salary: 14975,
  },
  {
    id: 10,
    first_name: "Patsy",
    last_name: "Ochterlonie",
    email: "pochterlonie9@latimes.com",
    gender: "Female",
    age: 93,
    salary: 9716,
  },
  {
    id: 11,
    first_name: "Madelina",
    last_name: "Henrion",
    email: "mhenriona@alibaba.com",
    gender: "Female",
    age: 81,
    salary: 12932,
  },
  {
    id: 12,
    first_name: "Godard",
    last_name: "Sciacovelli",
    email: "gsciacovellib@opera.com",
    gender: "Male",
    age: 90,
    salary: 16655,
  },
  {
    id: 13,
    first_name: "Padget",
    last_name: "Gore",
    email: "pgorec@washington.edu",
    gender: "Male",
    age: 34,
    salary: 8029,
  },
  {
    id: 14,
    first_name: "Birdie",
    last_name: "Davidovich",
    email: "bdavidovichd@tamu.edu",
    gender: "Female",
    age: 49,
    salary: 17407,
  },
  {
    id: 15,
    first_name: "Lisbeth",
    last_name: "Pride",
    email: "lpridee@epa.gov",
    gender: "Female",
    age: 94,
    salary: 14993,
  },
  {
    id: 16,
    first_name: "Saundra",
    last_name: "Ousbie",
    email: "sousbief@acquirethisname.com",
    gender: "Male",
    age: 44,
    salary: 15423,
  },
  {
    id: 17,
    first_name: "Allayne",
    last_name: "Cluatt",
    email: "acluattg@nifty.com",
    gender: "Male",
    age: 78,
    salary: 13206,
  },
  {
    id: 18,
    first_name: "Burke",
    last_name: "Christoforou",
    email: "bchristoforouh@un.org",
    gender: "Male",
    age: 84,
    salary: 13712,
  },
  {
    id: 19,
    first_name: "Maryanne",
    last_name: "Stoakes",
    email: "mstoakesi@rambler.ru",
    gender: "Female",
    age: 63,
    salary: 18235,
  },
  {
    id: 20,
    first_name: "Larisa",
    last_name: "Bartelet",
    email: "lbarteletj@studiopress.com",
    gender: "Female",
    age: 65,
    salary: 6594,
  },
  {
    id: 21,
    first_name: "Jamison",
    last_name: "Edgworth",
    email: "jedgworthk@apache.org",
    gender: "Male",
    age: 51,
    salary: 6476,
  },
  {
    id: 22,
    first_name: "Dare",
    last_name: "Etherton",
    email: "dethertonl@ed.gov",
    gender: "Male",
    age: 26,
    salary: 11718,
  },
  {
    id: 23,
    first_name: "Ernestus",
    last_name: "Luttgert",
    email: "eluttgertm@tumblr.com",
    gender: "Male",
    age: 98,
    salary: 6890,
  },
  {
    id: 24,
    first_name: "Cherye",
    last_name: "Cancellieri",
    email: "ccancellierin@bigcartel.com",
    gender: "Female",
    age: 56,
    salary: 19434,
  },
  {
    id: 25,
    first_name: "Silvie",
    last_name: "Cancott",
    email: "scancotto@github.com",
    gender: "Female",
    age: 100,
    salary: 15717,
  },
  {
    id: 26,
    first_name: "Martainn",
    last_name: "Groundwater",
    email: "mgroundwaterp@cnn.com",
    gender: "Male",
    age: 89,
    salary: 16985,
  },
  {
    id: 27,
    first_name: "Ernaline",
    last_name: "Collister",
    email: "ecollisterq@umich.edu",
    gender: "Female",
    age: 37,
    salary: 12353,
  },
  {
    id: 28,
    first_name: "Brandice",
    last_name: "Parlot",
    email: "bparlotr@gmpg.org",
    gender: "Female",
    age: 63,
    salary: 19860,
  },
  {
    id: 29,
    first_name: "Celestyn",
    last_name: "Dunnion",
    email: "cdunnions@cyberchimps.com",
    gender: "Female",
    age: 54,
    salary: 13108,
  },
  {
    id: 30,
    first_name: "Hayley",
    last_name: "Rea",
    email: "hreat@fotki.com",
    gender: "Female",
    age: 56,
    salary: 15717,
  },
  {
    id: 31,
    first_name: "Cairistiona",
    last_name: "Bengtson",
    email: "cbengtsonu@51.la",
    gender: "Female",
    age: 98,
    salary: 18685,
  },
  {
    id: 32,
    first_name: "Bonny",
    last_name: "Point",
    email: "bpointv@youtu.be",
    gender: "Female",
    age: 72,
    salary: 11893,
  },
  {
    id: 33,
    first_name: "Sanders",
    last_name: "Geelan",
    email: "sgeelanw@sciencedirect.com",
    gender: "Male",
    age: 57,
    salary: 13336,
  },
  {
    id: 34,
    first_name: "Berni",
    last_name: "Bagwell",
    email: "bbagwellx@skype.com",
    gender: "Female",
    age: 77,
    salary: 6671,
  },
  {
    id: 35,
    first_name: "Adrien",
    last_name: "Dibdin",
    email: "adibdiny@list-manage.com",
    gender: "Male",
    age: 70,
    salary: 5940,
  },
];

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
}

// Bài 1:
let listUser: any = [];
users.forEach((element) => {
  const fullName = {
    firstName: element.first_name,
    lastName: element.last_name,
  };
  listUser.push(fullName);
});

listUser.forEach((elment: any) => {
  console.log(
    "Firstname: ",
    elment.firstName,
    " - Lastname: ",
    elment.lastName
  );
});

// Bài 2:
const checkAge = (array: any, gender: string, age: number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].gender === gender && array[i].age < age) {
      console.log(array[i]);
    }
  }
};

console.log(checkAge(users, "Male", 50));

// Bài 3
const newUser = users.map((user) => {
  return {
    Id: user.id,
    FirstName: user.first_name,
    LastName: user.last_name,
    Email: user.email,
    Gender: user.gender,
    Age: user.age,
    Salary: user.salary,
  };
});

console.log("newUser ", newUser);

// Bài 5:  Tính trung bình tuổi các user trong mảng users
const advAge = users.reduce((initialValue, ageUser) => {
  return initialValue + ageUser.age;
}, 0);

console.log(
  "Tuổi trung bình của các user là: ",
  Math.ceil(advAge / users.length)
);
let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += i;
}

console.log("sum", sum);

// Bài 6
const newFullName = users.reduce((initialValue, name, index, array) => {
  const newUser = {
    firstName: name.first_name,
    lastName: name.last_name,
  };
  console.log(initialValue + newUser.firstName);

  return `${initialValue} FirstName: ${newUser.firstName} - LastName:  ${newUser.lastName} \n`;
}, "");

console.log("newFulName ", newFullName);
