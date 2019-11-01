import faker from "faker";

// crete random user data
export const randomUsers = (count = 10) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      idx: i,
      key: faker.random.uuid(),
      name: faker.name.firstName(),
      subtitle: faker.random.words(),
      avatar: faker.image.avatar()
    });
  }

  return arr;
};
