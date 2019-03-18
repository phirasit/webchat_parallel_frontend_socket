const axios = require('axios');
const hostURL = "http://parallel.ojudge.in.th/"
const queryURL = hostURL + "abci_query"
const boardcastURL = hostURL + "broadcast_tx_sync"

function getMessage(user, group, last_message = null, limit = 20) {
    var data = {
        user: user,
        group: group,
        last_message: last_message,
        limit: limit
    }
    var str = JSON.stringify({ type: 'get_message', data: data });
    var str = str.split("\"").join("\\\"")
    return axios.get(queryURL, {
        params: {
            data: "\"" + str + "\""
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function getUnreadMessage(user, group) {
    var data = {
        user: user,
        group: group
    }
    var str = JSON.stringify({ type: 'get_unread_message', data: data });
    var str = str.split("\"").join("\\\"")
    axios.get(queryURL, {
        params: {
            // data : '\"'+JSON.stringify({ type: 'get_unread_message', data: json })+'\"'
            data: "\"" + str + "\""
        }
    })
        .then(function (response) {
            // console.log(response.data);
            if (response.data.result.response.log == "OK") {
                console.log("Got a message")
                message = JSON.parse(Buffer.from(response.data.result.response.value, 'base64').toString('ascii'))
                ret = { code: 1, message: message }
                console.log(ret)
                return ret
                // console.log(JSON.parse(Buffer.from(response.data.result.response.value, 'base64').toString('ascii')))
            }
            else {
                log = response.data.result.response.log
                console.log("Error : " + log)
                ret = { code: 0, message: log }
                return ret
            }
            // response.data
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
/*
http://parallel.ojudge.in.th/abci_query?data="{\"type\":\"get_unread_message\",\"data\":{\"user\":\"1\",\"group\":\"123\"}}"
http://parallel.ojudge.in.th/abci_query?data="{"type":"get_unread_message","data":{"user":"1","group":"123"}}"

*/

function createNewGroup(user, group) {
    var data = {
        user: user,
        group: group
    }
    var str = JSON.stringify({ type: 'create_group', data: data });
    var str = str.split("\"").join("\\\"")
    return axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
        }
    })
        .then(function (response) {
            if (!response.data.error) {
                console.log(response.data.result);
                return response.data.result;
            }
            else {
                console.log("ERR " + response.data.error)
                return response.data.error;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function joinGroup(user, group) {
    var data = {
        user: user,
        group: group
    }
    var str = JSON.stringify({ type: 'join_group', data: data });
    var str = str.split("\"").join("\\\"")
    axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
        }
    })
        .then(function (response) {
            if (!response.data.error) {
                console.log(response.data.result);
                return response.data.result;
            }
            else {
                console.log("Err")
                console.log(response.data.error)
                return response.data.error;
            }

        })
        .catch(function (error) {
            console.log(error);
            console.log("ERRRRRRRRRRRRRRR")
        })
        .then(function () {
            // always executed
        });
}

function leaveGroup(user, group) {
    var data = {
        user: user,
        group: group
    }
    var str = JSON.stringify({ type: 'leave_group', data: data });
    var str = str.split("\"").join("\\\"")
    axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
        }
    })
        .then(function (response) {
            if (!response.data.error) {
                console.log(response.data.result);
                return response.data.result;
            }
            else {
                console.log("Err")
                console.log(response.data.error)
                return response.data.error;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function readMessage(user, group, timestamp) {
    var data = {
        user: user,
        group: group,
        timestamp: timestamp
    }
    var str = JSON.stringify({ type: 'read_message', data: data });
    var str = str.split("\"").join("\\\"")
    axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
        }
    })
        .then(function (response) {
            if (!response.data.error) {
                console.log(response.data.result);
                return response.data.result;
            }
            else {
                console.log("Err")
                console.log(response.data.error)
                return response.data.error;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function sendMessage(user, group, message) {
    var data = {
        user: user,
        group: group,
        message: message
    }
    var str = JSON.stringify({ type: 'send_message', data: data });
    var str = str.split("\"").join("\\\"")
    axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
        }
    })
        .then(function (response) {
            if (!response.data.error) {
                console.log(response.data.result);
                return response.data.result;
            }
            else {
                console.log("Err")
                console.log(response.data.error)
                return response.data.error;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

module.exports = {
    getMessage: getMessage,
    getUnreadMessage: getUnreadMessage,
    createNewGroup: createNewGroup,
    joinGroup: joinGroup,
    leaveGroup: leaveGroup,
    readMessage: readMessage,
    sendMessage: sendMessage
};
