const http = require("http");

const products = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    price: 25999,
    image:
      "https://dl.airtable.com/.attachments/e2e5c8f8b8e0b6b2cb9e8b6b2cb9e8b6/accent-chair.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description: "لورم ایپسوم متن ساختگی...",
    category: "office",
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    price: 109999,
    image:
      "https://dl.airtable.com/.attachments/e2e5c8f8b8e0b6b2cb9e8b6b2cb9e8b6/albany-sectional.jpeg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description: "لورم ایپسوم متن ساختگی...",
    category: "living room",
  },
  {
    id: "rec5NBwZ5zCD9optk",
    name: "albany table",
    price: 309990,
    image:
      "https://dl.airtable.com/.attachments/e2e5c8f8b8e0b6b2cb9e8b6b2cb9e8b6/albany-table.jpeg",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description: "لورم ایپسوم متن ساختگی...",
    category: "kitchen",
  },
];

const jokes = [
  {
    id: "1",
    joke: "چرا برنامه‌نویس‌ها تابستان را دوست ندارند؟ چون باگ‌های زیادی دارد!",
    status: 200,
  },
  {
    id: "2",
    joke: "یه روز یه برنامه‌نویس میره خرید، همسرش میگه: ۲ تا نون بخر، اگه تخم‌مرغ داشتن ۱۰ تا بخر. برنامه‌نویس با ۱۰ تا نون برمیگرده!",
    status: 200,
  },
  {
    id: "3",
    joke: "تفاوت بین یک برنامه‌نویس و یک هکر چیست؟ برنامه‌نویس کدی می‌نویسد که کار می‌کند، هکر کدی می‌نویسد که کد برنامه‌نویس را خراب می‌کند.",
    status: 200,
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/api/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        console.log("داده‌های دریافت شده از فرم:", data);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: `خوش آمدید ${data.name}!`,
            user: data,
          })
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ success: false, message: "داده‌های نامعتبر" })
        );
      }
    });
    return; 
  }

  if (req.url === "/" && req.method === "GET") {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(randomJoke));
    return;
  }

  if (req.url === "/api/react-store-products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "مسیر پیدا نشد" }));
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
