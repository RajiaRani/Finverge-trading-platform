require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


const { HoldingsModel } = require("./models/HoldingsModel.js");
const {PositionModel} = require("./models/PostionModel.js");
const {OrderModel} = require("./models/OrderModel.js");
const {UserModel} = require("./models/UserModel.js");
const { ProfileModel } = require("./models/ProfileModel.js");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(bodyParser.json());

// ---------- Middleware ----------
app.use(express.json());
app.use(cookieParser());


// SINGLE CORS middleware (no duplicate app.use(cors()))
const ALLOWED_ORIGINS = [
  "http://localhost:3000", // frontend (login/signup)
  "http://localhost:3001", // dashboard
  "http://localhost:3002",
  // add more origins if needed
];


app.use(
  cors({
    origin(origin, cb) {
      // allow REST tools/no-origin and allowed origins
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      return cb(new Error("CORS: Not allowed by policy"), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);



// ---------- Utilities ----------
function setAuthCookie(res, payload) {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false, // true in prod with HTTPS
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}


function verifyToken(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ status: false, message: 'No token' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ status: false, message: 'Invalid/expired token' });
  }
}

// SIGNUP
app.post('/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password)
      return res.status(400).json({ success:false, message:'All fields required' });

    const exists = await UserModel.findOne({ $or: [{ email }, { username }] });
    if (exists) return res.status(409).json({ success:false, message:'User already exists' });

    const hash = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ email, username, password: hash });

    // auto-create empty profile
    await ProfileModel.create({ user: user._id });

    setAuthCookie(res, { id: user._id, username: user.username });
    res.json({ success: true, message: 'Signed up', user: { username: user.username } });
  } catch (e) {
    res.status(500).json({ success:false, message: e.message });
  }
});

// LOGIN (email or username)
app.post('/login', async (req, res) => {
  try {
    const emailOrUsername = req.body.emailOrUsername || req.body.email;
    const { password } = req.body;
    if (!emailOrUsername || !password)
      return res.status(400).json({ success:false, message:'All fields required' });

    const user = await UserModel.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
    });
    if (!user) return res.status(401).json({ success:false, message:'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ success:false, message:'Invalid credentials' });

    setAuthCookie(res, { id: user._id, username: user.username });
    res.json({ success: true, message: 'Logged in', user: { username: user.username } });
  } catch (e) {
    res.status(500).json({ success:false, message: e.message });
  }
});

// VERIFY (used by dashboard guard)
app.post('/verify', verifyToken, (req, res) => {
  res.json({ status: true, user: req.user.username });
});


// LOGOUT
app.post('/logout', (_req, res) => {
  res.clearCookie('token', { httpOnly: true, sameSite: 'lax', secure: false });
  res.json({ success: true });
});


// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHoldings = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHoldings.save();
//   });

//   res.send("Holding data saved");
// });


// app.get("/addPostions", async(req,res) => {
//  let tempPotion = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     }
//  ];

//  tempPotion.forEach((item) => {
//     let newPosition = new PositionModel({
//          product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//  });
 
//  res.send("Postion demi data saved");
// });


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});


//  Buy the order
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("Backend started");
  mongoose.connect(uri);
  console.log("DB connected");
});
