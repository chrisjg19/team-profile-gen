const Manager = require('../lib/Employee');

test ('Testing name input', () => {
    const employee = new Employee ('chris', 19, 'chris@test.com');

    expect(employee.getName()) .toEqual(expect.any(String));
});
