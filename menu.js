import pg from "pg"
import readline from "readline-sync"
const { Pool } = pg
import { creds } from "./creds.js";

const pool = new Pool(creds);


async function runQuery(query) {
    return await pool.query(query)
}

while (true) {
    const answer = readline.question("Run what?")
    let query = ""
    let results = ""
    switch (answer) {
        case "1":  // 1. select * fom customers 
             query = "SELECT customer_id,first_name,last_name FROM customers "
             results = await runQuery(query)
            console.table(results.rows)
            break;

        case "2": // 2. add new customer
         query = `INSERT INTO customers(
            first_name, "last_name", phone, email)
           VALUES ('Fan', 'Tastic', '5615737782', 'fan@bocacode.com');`
           results = await runQuery(query)
           console.log("user added")
            break;

        case "3":// 3. update that customer 
        query = `UPDATE public.customers
        SET first_name='Dontworry ',
        last_name='Behappy', 
    -- 	email=?, 
    -- 	phone=?, 
    -- 	created_at=?, 
        updated_at=NOW()
        WHERE  customer_id=1;`
        results = await runQuery(query)
        console.log("customer updated")
            break;
        default:
            console.log("what?!")
    }
}

    // if (err) {
    //     console.error(err);
    //     return
    // }

    // console.group(data)
    // console.table(data.rows)
    // pool.end();

    // return data
// });
