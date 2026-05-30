const http = require("http");
const url = require("url");
const cartItems = require("./data");

const PORT = 5000;

const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  res.end(JSON.stringify(data));
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  // برای CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return res.end();
  }

  // route: GET /api/cart
  if (req.method === "GET" && pathname === "/api/cart") {
    return sendResponse(res, 200, cartItems);
  }

  // route not found
  return sendResponse(res, 404, { message: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
