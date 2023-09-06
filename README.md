# node-api-postgres
  A Node/Express server used for maintaining a PostgreSQL database of "bills."

## API url: https://node-for-bills.fly.dev

### Bills:
[GET] /bills returns an array of "bill" objects if a user has entered a "bill", array may be initially empty. Bill objects are represented as:
```js
[
    {
        bill_id: "650c9462-9edc-46d7-ad20-ba72c2096724"
        bill_name: "Test"
        bill_amount: "123.45"
        due_date: "2023-09-12"
        date_start: "2023-09-12"
        date_end: "2023-09-12"
        hex_color: "00FFFF"
        title: "Test: $123.45"
    },
    {
        bill_id: "579cf269-93f9-4ee3-8789-6af3a5c74ddf"
        bill_name: "Test2"
        bill_amount: "500.00"
        due_date: "2023-09-01"
        date_start: "2023-09-01"
        date_end: "2023-09-01"
        hex_color: "00FFFF"
        title: "Test: $500.00"
    }
]
```

#### Bills: 
| Method   | URL              | Description                                                                                                 |
|----------| -----------------|-------------------------------------------------------------------------------------------------------------|
| [GET]    | /bills           | Returns an array filled with bill objects.                                                                  |
| [GET]    | /bills/:bill_id  | Returns the bill object with the specified `bill_id`.                                                       |
| [DELETE] | /bills/:bill_id  | Removes the bill with the specified `bill_id` and returns the deleted bill.                                 |
| [PUT]    | /bills/:bill_id  | Updates the bill with the specified `bill_id` using data from the `request body`. Returns the modified bill |
