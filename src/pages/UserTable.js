import React, { useState,useMemo } from "react";
import { Container,  Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import useFetch from '../hooks/useFetch'
import { FaSortAlphaDownAlt, FaSortAlphaDown } from "react-icons/fa";  
import userTabledata from '../json/userTabledata.json'

const UserTable = () => { 
  const data= useFetch(userTabledata)
/*   const memoColumns = useMemo(() => columns, []);
  const memoData = useMemo(() => data, []); */
/* 
  const { headers, rows, selectRow, selectedRows } = useTable(
    memoColumns,
    memoData,
    {
      selectable: true,
    }
  ); */
    const SortButton = () => {
        return (
          <div className="ms-2 sort-button">
            {" "}
            {sort === "desc" ? (
              <FaSortAlphaDownAlt
                onClick={() => {
                  setSort("asc");
                  setTable(
                    data.sort((a , b  ) =>
                      a.lastname.localeCompare(b.lastname)
                    )
                  );
                }}
              />
            ) : (
              <FaSortAlphaDown
                onClick={() => {
                  setSort("desc");
                  setTable(
                    data.sort((a , b) =>
                      b.lastname.localeCompare(a.lastname)
                    )
                  );
                }}
              />
            )}
          </div>
        );
      };

      console.log('aaa',data)

    const [sort, setSort] = useState("desc");
    const [table, setTable] = useState(data);

   /*  <table>
        <thead>
          <tr>
            <th></th>
            {headers.map((header, idx) => (
              <th key={idx}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="checkbox"
                  onChange={e => {
                    selectRow(row.id);
                  }}
                />
              </td>
              {row.cells.map((cell, idx) => (
                <td key={idx}>{cell.render()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */
  
  return ( 
    <Container fluid>
       <Row className="mt-5"> 
        <h4>Order Table</h4>
      </Row>  
 
      <Row> 
        <Col className="d-flex justify-content-center align-items-center m-5 p-5 mt-0">
          <Table className="item-table" bordered variant="light">
            <thead>
              <tr>
                <th>First Name</th>
                <th className="d-flex justify-content-center">
                  Last Name
                  <SortButton />
                </th>
                <th>Order</th>
                <th>Item description</th>
                <th>Price</th>
              </tr>
            </thead>
             <tbody>

              {data.response.map((user)=>{ return user.orders.map((item) => {
                  return item.order.map((product, index) => (
                    <tr key={index} id="item-row">
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{item.orderNumber}</td>
                      <td>{product.product}</td>
                      <td>{product.preis} €</td>
                    </tr>
                  ))})
                })



              }
          {/*     {table.map((user) => {
                return user.orders.map((item) => {
                  return item.order.map((product, index) => (
                    <tr key={index} id="item-row">
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{item.orderNumber}</td>
                      <td>{product.product}</td>
                      <td>{product.preis} €</td>
                    </tr>
                  ));
                });
              })} */}
            </tbody> 
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default UserTable