import mysql from "mysql2/promise";
import config from "./config";
import jwt from "jsonwebtoken";

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const connection = await mysql.createConnection(config.database);

    const [result]: any = await connection.query(
      `
            SELECT login(?,?) as uid 
            `,
      [password, email],
    );

    const uid = result[0].uid;

    if (!uid) {
      return res.status(401).json("Hibás email vagy jelszó!");
    }

    const token = jwt.sign({ UserId: uid }, config.Jwt_Secret, {
      expiresIn: "5h",
    });

    return res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerver hiba!");
  }
};

export const getItems = async (_req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);

  try {
    const [result]: any = await connection.query(`
                SELECT * FROM products
            `);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerver hiba!");
  }
};

export const getItemsByID = async (req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);
  const id = Number(req.params.id);

  try {
    const [result]: any = await connection.query(
      `
                SELECT * FROM products WHERE id = ?
            `,
      [id],
    );

    if (result.lenght === 0) {
      return res.status(404).json("Nincs ilyen id!");
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerver hiba!");
  }
};

export const postProducts = async (req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);

  if (
    !req.body.name ||
    !req.body.description ||
    !Number(req.body.price) ||
    !Number(req.body.stock)
  ) {
    return res.status(404).json("Hiányzó vagy hibás mezők!");
  }

  try {
    const [result]: any = await connection.query(
      `
        INSERT INTO products VALUES(NULL,?,?,?,?,?) 
        `,
      [
        req.body.name,
        req.body.description,
        Number(req.body.price),
        Number(req.body.stock),
        req.body.pictureurl,
      ],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json("Nem sikerült beilleszteni!");
    }

    return res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerver hiba!");
  }
};

export const putProducts = async (req: any, res: any) => {
  const connection = await mysql.createConnection(config.database);
  if (
    !req.body.name ||
    !req.body.description ||
    !Number(req.body.price) ||
    !Number(req.body.stock)
  ) {
    return res.status(404).json("Hiányzó vagy hibás mezők!");
  }
  try {
    const [result]:any = await connection.query(`
            UPDATE products SET name=?, description=?, price=?, stock=?, pictureurl=? WHERE id =?
        `,[req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.pictureurl, req.params.id])


        if(result.affectedRows === 0){
            return res.status("Az elem nem létezik");
        }

        return res.status(201).json("Sikeres módosítás!")
  } catch (err) {
    console.log(err);
    return res.status(500).json("Szerver hiba!");
  }
};
