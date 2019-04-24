/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import fastify from "fastify";
import { sayHelloWorld } from "./sayHelloWorld";

fastify({ logger: true })
  .get("*", async (_, reply) => reply.send({ message: sayHelloWorld() }))
  .listen(3000);
