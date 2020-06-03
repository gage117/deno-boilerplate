import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
	.get('/', (context) => {
		context.response.body = "Response, homie.";
	})

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

export { app }