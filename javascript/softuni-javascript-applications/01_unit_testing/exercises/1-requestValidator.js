function httpRequest(request) {
    const {method, uri, version, message} = request;
    let invalidProp = null;
    const allowedMethods = ['POST', 'GET', 'DELETE', 'PUT'];
    const uriPattern = /^[A-Za-z0-9.]+|\*$/g;
    const allowedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]*$/g;

    if (!method || !allowedMethods.includes(method)) {
        invalidProp = 'method';
        throw new Error(`Invalid request header: Invalid ${invalidProp}!`)
    }

    if (!uri || !uriPattern.test(uri)) {
        invalidProp = 'uri';
        throw new Error(`Invalid request header: Invalid ${invalidProp}!`)
    }

    if (!version || !allowedVersions.includes(version)) {
        invalidProp = 'version';
        throw new Error(`Invalid request header: Invalid ${invalidProp}!`)
    }

    if (message===undefined || !messagePattern.test(message)) {
        invalidProp = 'message';
        throw new Error(`Invalid request header: Invalid ${invalidProp}!`)
    }

    return request;
}



[{
    method: 'GET',
        uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}, {
    method: 'OPTIONS',
        uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}, {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}].forEach(req => {
    console.log('------');
    try {
        const result = httpRequest(req);
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }
});


