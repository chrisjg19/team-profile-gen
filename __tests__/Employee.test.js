const Employee = require('../lib/Employee');

test ('Testing name input', () => {
    const employee = new Employee ('chris', 19, 'chris@test.com');

    expect(employee.getName()) .toEqual(expect.any(String));
});

test ('Testing Id input', () => {
    const employee = new Employee ('chris', 19, 'chris@test.com');

    expect(employee.getId()) .toEqual(expect.any(Number));
});

test ('Testing email input', () => {
    const employee = new Employee ('chris', 19, 'chris@test.com');

    expect(employee.getEmail()) .toEqual(expect.any(String));
});

test ('Testing Role input', () => {
    const employee = new Employee ('chris', 19, 'chris@test.com');

    expect(employee.getRole()) .toEqual('Employee');
});