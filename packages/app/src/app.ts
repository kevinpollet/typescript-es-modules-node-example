/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { sayHello } from "es-module";
import fastify from "fastify";
import { sayHelloLocal } from "./sayHelloLocal";

fastify({ logger: true })
  .get("*", async (_, reply) =>
    reply.send({ messages: [sayHello(), sayHelloLocal()] })
  )
  .listen(3000);
