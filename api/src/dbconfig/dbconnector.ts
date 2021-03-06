import {Pool} from "pg";

const pool = new Pool({
  max: 20,
  //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
  connectionString: "postgres://postgres:newPassword@postgres:5432/buildings-db",
  idleTimeoutMillis: 90000,
});

export default pool;
