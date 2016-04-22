"use strict";

const request = require('request');
const id = 123;
const baseUrl = `http://localhost:3000/products/${id}`;

describe(`GET product by id: ${id}`, function() {
	it('should respond with the correct product JSON', function(done) {
		request(baseUrl, function(error, response, body) {
			expect(response.statusCode).toEqual(200);
			expect(body.length).not.toEqual(0);		
			done();
		});		
	});	
});