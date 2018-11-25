Styled up `input[type="[something]"]` with basic set of props on it.

**Note**: For advance field manipulation, I suggest just import only the style.

**Base**

```js

<Field
  name="fullName"
  label="Full name"
  type="text"
  onFieldChange={value => console.log(value)}
/>

<Field
  name="age"
  label="Your age"
  type="number"
  onFieldChange={value => console.log(value)}
/>

<Field
  name="address"
  label="Your address"
  errorMsg='Required Field'
  type="text"
  onFieldChange={value => console.log(value)}
/>
```

**Block**

```js
<Field
  modifiers="block"
  name="fullName"
  label="Full name"
  type="text"
  onFieldChange={value => console.log(value)}
/>

<Field
  modifiers="block"
  name="age"
  label="Your age"
  type="number"
  errorMsg="Required Field"
  onFieldChange={value => console.log(value)}
/>

<Field
  modifiers="block"
  name="address"
  label="address"
  type="text"
  onFieldChange={value => console.log(value)}
/>
```

**Text Area**

```js
<Field
  modifiers="widen" 
  name="comment"
  label="Comment"
  type="textarea"
  onFieldChange={value => console.log(value)}
/>
```

**Form**

```js
<div>
  <Field
    modifiers="block"
    name="emailAddress"
    label="Email Address"
    type="text"
    onFieldChange={value => console.log(value)}
  />

  <Btn>Submit</Btn>
</div>

<div>
  <Field
    modifiers="block"
    name="emailAddress"
    label="Email Address"
    type="text"
    errorMsg="Is Required."
    onFieldChange={value => console.log(value)}
  />

  <Btn>Submit</Btn>
</div>
```

**Inline form**

```js
<div className="uInlineMiddleItems">
  <Field
    name="emailAddress"
    label="Email Address"
    type="text"
    onFieldChange={value => console.log(value)}
  />

  <Field
    name="emailAddress"
    label="Email Address"
    type="text"
    errorMsg="Is Required."
    onFieldChange={value => console.log(value)}
  />

  <Btn modifiers="primary">Submit</Btn>
</div>
```