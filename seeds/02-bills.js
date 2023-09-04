exports.seed = function(knex) {
  return knex('bills').insert([
    {bill_id: 'de54cebe-7597-4523-abcb-7f90b120c566', bill_name: 'House', bill_amount: '1200.00', due_date:'2023-09-01', date_start: '2023-09-01', date_end: '2023-09-01', hex_color:'00FFFF', title: 'House: $1200.00'},
    {bill_id: 'dd53cebe-7597-4523-abcb-7f90b120c566', bill_name: 'Cell Phone', bill_amount: '200.00', due_date:'2023-09-04', date_start: '2023-09-04', date_end: '2023-09-04', hex_color:'00FFFF', title: 'Cell Phone: $200.00'},
    {bill_id: 'de54cebe-7597-4523-abcb-7f90b020c566', bill_name: 'Insurance', bill_amount: '550.00', due_date:'2023-09-13', date_start: '2023-09-13', date_end: '2023-09-13', hex_color: '00FFFF', title: 'Insurance: $550'},
    {bill_id: 'de54cebe-7587-4523-abcb-7f90b120c566', bill_name: 'Car', bill_amount: '470.00', due_date:'2023-09-23', date_start: '2023-09-23', date_end: '2023-09-23', hex_color: '00FFFF', title: 'Car: $470.00'},
    {bill_id: 'de54cebe-7597-4523-abcb-7f90b120d566', bill_name: 'Netflix', bill_amount: '15.00', due_date:'2023-09-17', date_start: '2023-09-17', date_end: '2023-09-17', hex_color: '00FFFF', title: 'Netflix: $15.00'}
  ])
}