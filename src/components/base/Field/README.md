Styled up `input[type="[something]"]` with basic set of props on it.

**Note**: For advance field manipulation, I suggest just import only the style.

**Base**

```js
<Field name="firstName" label="First name" type="text" />
<Field name="lastName" label="Last name" type="text" />
<Field name="age" label="Your age" type="number" />
<Field name="age" label="Your age" type="number" errorMsg='Required Field' />
```