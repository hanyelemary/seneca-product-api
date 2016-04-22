"use strict";

var seneca = require('seneca')()
      .use('./product-service');

var app = require('express')()
      .use(require('body-parser').json())
      .use(seneca.export('web'))
      .listen(3000);