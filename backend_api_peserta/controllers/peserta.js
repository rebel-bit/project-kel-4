// import functiomn
import {
  getPesertas,
  getPesertaById,
  insertPeserta,
  updatePesertaById,
  deletePesertaById,
} from "../models/pesertaModel.js";

// get all peserta
export const showPesertas = (_req, res) => {
  getPesertas((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Product
export const showPesertaById = (req, res) => {
  getPesertaById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// get single peserta//
export const createPeserta = (req, res) => {
  const data = req.body;
  insertPeserta(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Updatepeserta
export const updatePeserta = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updatePesertaById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Peserta
export const deletePeserta = (req, res) => {
  const id = req.params.id;
  deletePesertaById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
