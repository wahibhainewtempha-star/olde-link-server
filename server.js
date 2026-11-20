const express = require("express");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(helmet());
app.use(express.json({ limit: "16kb" }));

app.get("/", (_req, res) => {
  res.type("text").send("OLDE LINK server is running.");
});

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "olde-link-server",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// Initial safe endpoint: confirms that the API is reachable.
// Device enrollment, authentication, and persistent storage will be added
// in later steps. No remote shell or arbitrary device-command endpoint exists.
app.get("/api/status", (_req, res) => {
  res.json({
    service: "OLDE LINK",
    api: "online",
    features: ["health-check"],
    next: "authenticated-enrollment"
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`OLDE LINK server listening on port ${port}`);
});
