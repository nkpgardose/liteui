Styled up `input[type="[something]"]` with basic set of props on it.

**Note**: For advance field manipulation, I suggest just import only the style.

**Base**

```js
<Field name="givenName" label="Given name" type="text" />
<Field name="lastName" label="Last name" type="text" />
<Field name="age" label="Your age" type="number" />
<Field name="address" label="Your address" errorMsg='Required Field' />
```

**Block**

```js
<Field modifiers="block" name="givenName" label="Given name" type="text" />
<Field modifiers="block" name="lastName" label="Last name" type="text" />
<Field modifiers="block" name="age" label="Your age" type="number" errorMsg="Required Field" />
```

**Text Area**

```js
<Field modifiers="widen" name="comment" label="Comment" type="textarea" />
```

**Form**

```js
<div>
  <Field modifiers="block" name="emailAddress" label="Email Address" type="text" errorMsg="Is Required." />
  <Btn>Submit</Btn>
</div>
```

**Inline form**

```js
<div className="uInlineMiddleItems">
  <Field name="emailAddress" label="Email Address" type="text" errorMsg="Is Required." />
  <Btn modifiers="primary">Submit</Btn>
</div>
```