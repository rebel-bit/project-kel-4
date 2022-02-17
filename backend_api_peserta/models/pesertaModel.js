// membuat koneksi/
import db from "../config/database.js";

//get all  peserta//
export const getPesertas = (result) => {
  db.query("SELECT * FROM peserta", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single peserta//
export const getPesertaById = (id, result) => {
  db.query(
    "SELECT * FROM peserta WHERE peserta_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.info(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// insert Peserta to database
export const insertPeserta = (data, result) => {
  db.query("INSERT INTO peserta SET ?", [data], (err, results) => {
    if (err) {
      console.info(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// update data peserta  to databse//
export const updatePesertaById = (data, id, result) => {
  db.query(
    "UPDATE peserta SET peserta_name = ?, peserta_alamat = ? WHERE peserta_id = ?",
    [data.peserta_name, data.peserta_alamat, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
// Delete Peserta to Database
export const deletePesertaById = (id, result) => {
  db.query("DELETE FROM product WHERE peserta_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
