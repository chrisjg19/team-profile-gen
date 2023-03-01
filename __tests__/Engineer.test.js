const Engineer = require('../lib/Engineer');

test ('Testing github name input', () => {
    const engineer = new Engineer ('chris', 19, 'chris@test.com', 'chrisjg19');

    expect(engineer.github) .toEqual(expect.any(String));
});

test ('Testing if connects to Github', () => {
    const engineer = new Engineer ('chris', 19, 'chris@test.com', 'chrisjg19');

    expect(engineer.getGithub()) .toEqual(expect.stringContaining(engineer.github.toString()));
});

test ('Testing role input', () => {
    const engineer = new Engineer ('chris', 19, 'chris@test.com', 'chrisjg19');

    expect(engineer.getRole()) .toEqual('Engineer');
});
