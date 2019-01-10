const {request} = require("http");
const querystring = require("querystring");

const postData = querystring.stringify({
    msg: "Hello World"
});

const options = {
    hostname: "localhost",
    port: "4200",
    method: "POST",
    headers: {
        "Content-Type": "application/x-ww-form-urlencoded",
        "Content-Length": postData.length
    }
};

const req = request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");

    res.on("data", (chunk) => {
        console.log(`BODY: ${chunk}`);
    });

    res.on("end", () => console.log("No more data in response."));
});

req.on("error", (e) => console.error("problem with", e.message));
req.write(postData);
req.end();