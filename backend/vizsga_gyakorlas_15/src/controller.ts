import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import config from "./config";

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  const connection = await mysql.createConnection(config.database);
  try {
    const [result]: any = await connection.query(
      `
                SELECT login(?,?) as uid
            `,
      [email, password],
    );

    const id = result[0].uid;

    if (!id) {
      return res.status(401).json("Hibás email vagy jelszó!");
    }

    const token = jwt.sign({ userId: id }, config.JwtSecret, {
      expiresIn: "5h",
    });

    return res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerve hiba");
  }
};

export const getUsers = async (_req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);

  try {
    const [result]: any = await connection.query(
      `
      SELECT * FROM users
               
            `,
    );

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerve hiba");
  }
};

export const post = async (req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);

  try {
    const [result]: any = await connection.query(
      `
      INSERT INTO users VALUES(NULL, ?,?,?,?,?)
               
            `,[req.body.name, req.body.email, req.body.password, req.body.address, req.body.avatar],
    );

    return res.status(200).json({id: result.insertId});
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerve hiba");
  }
};

export const putUser = async (req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);
 if (!req.body.name || !req.body.email || !req.body.password || !req.body.address) {
    return res.status(400).json("Az adatok nem megfelelőek!");
  }
  try {
    const [result]: any = await connection.query(
      `
      UPDATE users SET name=?,email=?,password=?,address=?,avatar=? WHERE uid = ?
               
            `,[req.body.name, req.body.email, req.body.password, req.body.address, req.body.avatar, Number(req.params.id)],
    );

    if(result.affectedRows === 0){
        return res.status(404).json("Az elem nem létezik");
    }

    return res.status(201).json("Sikeres módosytás!");
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerve hiba");
  }
};

export const patchUser = async (req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);
  try {
    const [result]: any = await connection.query(
      `UPDATE users SET name=COALESCE(?,name), email=COALESCE(?,email), password=COALESCE(?,password), address=COALESCE(?,address), avatar=COALESCE(?,avatar) WHERE uid=?`,
      [req.body.name, req.body.email, req.body.password, req.body.address, req.body.avatar, Number(req.params.id)]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json("Az elem nem létezik");
    }
    return res.status(201).json("Sikeres módosítás!");
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerver hiba");
  }
};