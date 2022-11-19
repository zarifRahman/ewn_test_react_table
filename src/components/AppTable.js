import React, { useState } from "react";
import { Delete } from "@material-ui/icons";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons.js";
import faker from "faker";

const resultsTwo = [...Array(50).keys()].map((i) => {
  return {
    name: faker.name.findName(),
    state: faker.address.state(),
    account: faker.finance.account(),
  };
});
console.log(resultsTwo);

const results = [
  { id: 1, name: "Trisha Fay", state: "Washington", account: "67102103" },
  { id: 2, name: "Melvin Wiza", state: "Wisconsin", account: "34567557" },
  { id: 3, name: "Estelle Jenkins", state: "Alabama", account: "53536102" },
  { id: 4, name: "Ambrose Feil", state: "Florida", account: "69726777" },
  { id: 5, name: "Miss Nyasia Walter", state: "Texas", account: "50059899" },
  { id: 6, name: "Philip Hermann", state: "West Virginia", account: "62951404" },
  {id: 7,name: 'Yadira Feil', state: 'West Virginia', account: '78630506'},
{id: 8,name: 'Christopher Bartell', state: 'Louisiana', account: '18023587'},
{ id: 10,name: 'Tavares Swift', state: 'Florida', account: '64561789'},
{id: 11, name: 'Kevin Schaden II', state: 'Montana', account: '95507970'},
{id: 12, name: 'Johnny Lubowitz', state: 'New Mexico', account: '03995416'},
{id: 13, name: 'Dr. Khalil Hettinger', state: 'Utah', account: '95089420'},
{id: 14, name: 'Edwina Conn', state: 'Missouri', account: '36709289'},
{id: 15, name: 'Alison Runolfsdottir', state: 'Utah', account: '40076884'},
{id: 16,name: 'Layne Windler', state: 'Kansas', account: '88465643'},
{id: 17,name: 'Bernie Konopelski', state: 'Wisconsin', account: '17812388'},
{id: 18, name: 'Herta Kihn', state: 'West Virginia', account: '47380687'},
{id: 19, name: 'Ova Paucek', state: 'Nebraska', account: '03805349'},
{id: 20, name: 'Etha Brakus', state: 'Arkansas', account: '66860747'},
{id: 21, name: 'Chanel Schmeler', state: 'Minnesota', account: '07309758'},
{id: 22, name: 'Mohamed Green', state: 'South Dakota', account: '88233808'},
{id: 23,name: 'Janie Beer', state: 'New York', account: '62875375'},
];

export default function AppTable() {
  console.log(results);
  const value = localStorage.getItem("data");
  console.log(typeof JSON.parse(value), "-----")
  const [data, setData] = useState(JSON.parse(value) || results);

  const handleDeleteRows = (event, rowData) => {
    let _data = [...data];
    rowData.forEach((rd) => {
      _data = _data.filter((t) => t.id !== rd.id);
    });
    setData(_data);
    console.log(_data);
    localStorage.setItem("data", JSON.stringify(_data));
  };

  return (
    <MaterialTable
      title='Table'
      columns={[
        {
          title: "Name",
          field: "name",
        },
        {
          title: "State",
          field: "state",
        },
        {
          title: "Account",
          field: "account",
        },
      ]}
      data={data}
      options={{
        selection: true,
        pageSize: 10,
        search: false
      }}
      icons={tableIcons}
      actions={[
        {
          icon: () => <Delete />,
          tooltip: "Delete Rows",
          onClick: handleDeleteRows,
        },
      ]}
    />
  );
}
