// import express
import express from "express";

// import function from controller
import {
  showPesertas,
  showPesertaById,
  createPeserta,
  updatePeserta,
  deletePeserta,
} from "../controllers/peserta.js";

// init express router
const router = express.Router();

// Get AllPeserta
router.get("/pesertas", showPesertas);

// Get Single Peserta
router.get("/pesertas/:id", showPesertaById);

// Create New Peserta
router.post("/pesertas", createPeserta);

// Update Peserta
router.put("/pesertas/:id", updatePeserta);

// Delete Peserta
router.delete("/pesertas/:id", deletePeserta);

// export default router
export default router;
