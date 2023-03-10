const Intern = require('../lib/Intern');

test ('Testing school input', () => {
    const intern = new Intern ('chris', 19, 'chris@test.com', 'Rice');

    expect(intern.school) .toEqual(expect.any(String));
});
//had accidentally put the () in the school input instead of the test below
test ('Testing school input working with getSchool()', () => {
    const intern = new Intern ('chris', 19, 'chris@test.com', 'Rice');

    expect(intern.getSchool()) .toEqual(expect.stringContaining(intern.school.toString()));
});

test ('Testing role input', () => {
    const intern = new Intern ('chris', 19, 'chris@test.com', 'Rice');

    expect(intern.getRole()) .toEqual('Intern');
});