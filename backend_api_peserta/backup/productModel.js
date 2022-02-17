/*import db from "../config/database.jd";

//get all  peserta//
export const getPesertas = (result) => {
  db.query("SELECT * FROM peserta", (err, results) => {
    if (err) {
      console.info(err);
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
};*/
(function (_0x2ed441, _0x188b8d) {
  const _0x63ce1e = _0x3cb9,
    _0x32416f = _0x2ed441();
  while (!![]) {
    try {
      const _0xa74dbe =
        parseInt(_0x63ce1e(0x15c)) / 0x1 +
        (-parseInt(_0x63ce1e(0x15f)) / 0x2) *
          (-parseInt(_0x63ce1e(0x14b)) / 0x3) +
        (-parseInt(_0x63ce1e(0x155)) / 0x4) *
          (-parseInt(_0x63ce1e(0x15a)) / 0x5) +
        (parseInt(_0x63ce1e(0x152)) / 0x6) *
          (parseInt(_0x63ce1e(0x15d)) / 0x7) +
        (-parseInt(_0x63ce1e(0x154)) / 0x8) *
          (parseInt(_0x63ce1e(0x157)) / 0x9) +
        (parseInt(_0x63ce1e(0x156)) / 0xa) *
          (parseInt(_0x63ce1e(0x15b)) / 0xb) +
        (-parseInt(_0x63ce1e(0x153)) / 0xc) *
          (parseInt(_0x63ce1e(0x158)) / 0xd);
      if (_0xa74dbe === _0x188b8d) break;
      else _0x32416f["push"](_0x32416f["shift"]());
    } catch (_0x588c60) {
      _0x32416f["push"](_0x32416f["shift"]());
    }
  }
})(_0x2373, 0x31908);
import _0x390442 from "../config/database.jd";
export const getPesertas = (_0x30a755) => {
  const _0x35d0ae = _0x3cb9;
  _0x390442[_0x35d0ae(0x14c)](_0x35d0ae(0x159), (_0x4851db, _0x3cd0be) => {
    const _0x856a9c = _0x35d0ae;
    _0x4851db
      ? (console[_0x856a9c(0x15e)](_0x4851db), _0x30a755(_0x4851db, null))
      : _0x30a755(null, _0x3cd0be);
  });
};
export const getPesertaById = (_0x3908a0, _0x5194fa) => {
  const _0x5556ec = _0x3cb9;
  _0x390442["query"](_0x5556ec(0x150), [_0x3908a0], (_0x363134, _0x436912) => {
    const _0x23c258 = _0x5556ec;
    _0x363134
      ? (console[_0x23c258(0x15e)](_0x363134), _0x5194fa(_0x363134, null))
      : _0x5194fa(null, _0x436912);
  });
};
export const insertPeserta = (_0x1d8255, _0x557120) => {
  const _0x37c309 = _0x3cb9;
  _0x390442[_0x37c309(0x14c)](
    _0x37c309(0x14d),
    [_0x1d8255],
    (_0x54c828, _0x4df4bd) => {
      const _0x8a9bfc = _0x37c309;
      _0x54c828
        ? (console[_0x8a9bfc(0x15e)](_0x54c828), _0x557120(_0x54c828, null))
        : _0x557120(null, _0x4df4bd);
    }
  );
};
function _0x2373() {
  const _0x4f734f = [
    "810HIORTJ",
    "813engMRa",
    "query",
    "INSERT\x20INTO\x20peserta\x20SET\x20?",
    "log",
    "peserta_alamat",
    "SELECT\x20*\x20FROM\x20peserta\x20WHERE\x20peserta_id\x20=\x20?",
    "peserta_name",
    "1252608TJljfD",
    "1968JscwYh",
    "3144UVKPzJ",
    "4300xeQjAl",
    "40XcIkel",
    "8541GRSXLM",
    "22282JtWemD",
    "SELECT\x20*\x20FROM\x20peserta",
    "395SRQalR",
    "699963CFMywJ",
    "199089dPEDek",
    "7MfEsPo",
    "info",
  ];
  _0x2373 = function () {
    return _0x4f734f;
  };
  return _0x2373();
}
export const updatePesertaById = (_0x214b3c, _0xdb2e25, _0xa14e60) => {
  const _0x30ff44 = _0x3cb9;
  _0x390442[_0x30ff44(0x14c)](
    "UPDATE\x20peserta\x20SET\x20peserta_name\x20=\x20?,\x20peserta_alamat\x20=\x20?\x20WHERE\x20peserta_id\x20=\x20?",
    [_0x214b3c[_0x30ff44(0x151)], _0x214b3c[_0x30ff44(0x14f)], _0xdb2e25],
    (_0x58ca93, _0x5b29c0) => {
      const _0x1ca1e9 = _0x30ff44;
      _0x58ca93
        ? (console[_0x1ca1e9(0x14e)](_0x58ca93), _0xa14e60(_0x58ca93, null))
        : _0xa14e60(null, _0x5b29c0);
    }
  );
};
function _0x3cb9(_0x413b12, _0x1ef2cb) {
  const _0x237338 = _0x2373();
  return (
    (_0x3cb9 = function (_0x3cb9bd, _0x2bac37) {
      _0x3cb9bd = _0x3cb9bd - 0x14b;
      let _0x238b64 = _0x237338[_0x3cb9bd];
      return _0x238b64;
    }),
    _0x3cb9(_0x413b12, _0x1ef2cb)
  );
}
export const deletePesertaById = (_0x2f673b, _0x22694f) => {
  const _0x43382a = _0x3cb9;
  _0x390442[_0x43382a(0x14c)](
    "DELETE\x20FROM\x20product\x20WHERE\x20peserta_id\x20=\x20?",
    [_0x2f673b],
    (_0x347f85, _0x1c11f0) => {
      const _0x537aba = _0x43382a;
      _0x347f85
        ? (console[_0x537aba(0x14e)](_0x347f85), _0x22694f(_0x347f85, null))
        : _0x22694f(null, _0x1c11f0);
    }
  );
};
