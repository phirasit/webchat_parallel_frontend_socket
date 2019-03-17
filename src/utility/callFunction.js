const axios = require('axios');
const hostURL = "http://parallel.ojudge.in.th/"
const queryURL = hostURL + "/abci_query"
const boardcastURL = hostURL + "/broadcast_tx_sync"

function getMessage(user, group, last_message, limit=20) {
    data = {
        user : user,
        group : group,
        last_message : last_message, 
        limit : limit
    }
    str = JSON.stringify({ type: 'get_message', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(queryURL,  {
        params: {
            data : "\"" + str + "\""
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
    data = {
        user : user,
        group : group
    }
    str = JSON.stringify({ type: 'get_unread_message', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(queryURL,  {
        params: {
            // data : '\"'+JSON.stringify({ type: 'get_unread_message', data: json })+'\"'
            data : "\"" + str + "\""
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
/*
http://parallel.ojudge.in.th/abci_query?data="{\"type\":\"get_unread_message\",\"data\":{\"user\":\"1\",\"group\":\"123\"}}"
http://parallel.ojudge.in.th/abci_query?data="{"type":"get_unread_message","data":{"user":"1","group":"123"}}"

*/

function createNewGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    str = JSON.stringify({ type: 'create_new_group', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(boardcastURL,  {
        params: {
            tx: "\"" + str + "\""
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

function joinGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    str = JSON.stringify({ type: 'join_group', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(boardcastURL,  {
        params: {
            tx: "\"" + str + "\""
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

function leaveGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    str = JSON.stringify({ type: 'leave_group', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(boardcastURL,  {
        params: {
            tx: "\"" + str + "\""
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

function readMessage(user, group, timestamp) {
    data = { 
        user: user,
        group: group,
        timestamp: timestamp
    }
    str = JSON.stringify({ type: 'read_message', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
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

function sendMessage(user, group, message) {
    data = {
        user: user,
        group: group,
        message: message
    }
    str = JSON.stringify({ type: 'send_message', data: data });
    str = str.split("\"").join("\\\"")
    return axios.get(boardcastURL, {
        params: {
            tx: "\"" + str + "\""
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

module.exports = {
    getMessage: getMessage,
    getUnreadMessage : getUnreadMessage, 
    createNewGroup : createNewGroup,
    joinGroup : joinGroup, 
    leaveGroup : leaveGroup,
    readMessage : readMessage, 
    sendMessage : sendMessage
};
