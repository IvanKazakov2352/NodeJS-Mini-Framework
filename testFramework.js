const Framework = require("./basis/framework");
const Router = require("./router/router");
const baseData = require("./base-data/baseData");
const bodyParser = require("./bodyParser/bodyParser");
const PORT = 8080;

const app = new Framework();

const router = new Router();

app.use(baseData);
app.use(bodyParser);
app.use(router.toMiddleware());

router.get("/posts", (ctx, res) => {
  ctx.status = 201
  console.log(ctx.body)
});

router.post("/posts", (ctx) => {
  ctx.status = 201;
  ctx.body = { data: ctx.reqBody };
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
