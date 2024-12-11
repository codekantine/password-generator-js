# Password Generator

The JS class generates passwords in a format suggested by Ricky Mondello
(https://rmondello.com/2024/10/07/apple-passwords-generated-strong-password-format/).
However this implementation doesn't make use of a swearword dictionary.

There's a ready-to-use version on GitHub Pages:
https://codekantine.github.io/password-generator-js

You may want to utilize <code>js/PasswordGenerator.js</code> in your own project.

## Example

<code>const pg = new PasswordGenerator();
pg.generatePassword(); // 'generatePassword()' generates a new pw and returns it
console.log(pg.password); // 'password' contains the last generated pw</code>
