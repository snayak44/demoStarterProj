package com.dxc.cna.demoStarterProj.controller;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@Api(value="HelloController", hidden=true)
public class HelloController {

	@ApiOperation(value = "HelloController",notes="The API HelloController having the GET method named index."
			+ "The index method can be accesible by mapping the path with /greet."
			+ "This GET method produces String result."
			+ "This API method sends welcome message on successful request."
			+ "The response status code will be 200 for successful HTTP request."
			+ "The response status code will be 400 for Bad HTTP Request."
			+ "The response status code will be 500 for Internal Server Error." ,response =String.class)
	@ApiResponses(value = {
    @ApiResponse(code = 200, message = "HTTP request was successful and got response."),
    @ApiResponse(code = 404, message = "Bad request.The server cannot or will not process the request due to an apparent client error."),
    @ApiResponse(code = 500, message = "Internal Server Error.An unexpected condition was encountered.")})
    @RequestMapping(value="/greet",method= RequestMethod.GET)
    public String index() {
        return "Congratulations!! DXC Cloud Native Starter Project is generated successfully!!Click on https://github.com/snayak44/demoStarterProj.git to download your source code and enhance it. ";
    }

}
