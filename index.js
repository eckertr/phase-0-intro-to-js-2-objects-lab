let employee = {
    name: "Orion",
    streetAddress: "123 Maple St"

}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
/*updateEmployeeWithKeyAndValue()`: this function should take in three
  arguments: an `employee` `Object`, a `key` and a `value`. This function should
  not mutate the `employee`; it should return a _new_ `Object` that has an
  updated `value` for the `key` passed in. **Hint**: use the spread operator!
- `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
  same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
  `employee` `Object` passed in.
- `deleteFromEmployeeByKey()`: this function should take in a `employee`
  `Object` and a `key`. It should delete the property with that `key` from the
  `employee` `Object`. This should not mutate the original `employee` `Object`;
  it should return a _new_ `Object` that doesn't include the identified
  key-value pair. **Hint**: use the spread operator!
- `destructivelyDeleteFromEmployeeByKey()`: this function should work the same
  as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.*/