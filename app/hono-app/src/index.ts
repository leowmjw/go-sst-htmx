import { Hono } from 'hono'
import {Resource} from "sst";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono! fouyoh .. as part of mon repo ..')
})

app.get('/foo', (c) => {
  // return c.html("<strong>BOO YAH!!</strong>");
  return c.text('Bye BOOooh!!!')
})

app.put('/upload', async (c) => {
  const key = crypto.randomUUID();
  await Resource.MyBucket.put(key, c.req.raw.body, {
    httpMetadata: {
      contentType: c.req.raw.headers.get("content-type"),
    },
  })
  return c.text("is uploaded the key " + key)
})

export default app
