const Manager = require('../lib/Manager');

test ('Testing officeNumber input', () => {
    const manager = new Manager ('chris', 19, 'chris@test.com', 10);

    expect(manager.officeNumber) .toEqual(expect.any(Number));
});

test ('Gets role input', () => {
    const manager = new Manager ('chris', 19, 'chris@test.com');

    expect(manager.getRole()) .toEqual("Manager");
});
