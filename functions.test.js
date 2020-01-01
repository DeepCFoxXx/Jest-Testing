const functions = require("./functions");

const nameCheck = () => console.log("Checking Name....");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Yoda", () => {
    const user = "Yoda";
    expect(user).toBe("Yoda");
  });

  test("User is Kara", () => {
    const user = "Kara";
    expect(user).toBe("Kara");
  });
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("User should be Luke Skywalker object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Luke",
    lastName: "Skywalker"
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("Admin should be in usernames", () => {
  usernames = ["Luke", "Liea", "admin"];
  expect(usernames).toContain("admin");
});

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
