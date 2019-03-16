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
    json = JSON.stringify(data);
    return axios.get(queryURL,  {
        params: {
            data : JSON.stringify({ type: 'get_message', data: json })
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
    // json = JSON.stringify(data);
    json = data;
    return axios.get(queryURL,  {
        params: {
            data : '\"'+JSON.stringify({ type: 'get_unread_message', data: json })+'\"'
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

function createNewGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    // json = JSON.stringify(data);
    json = data;
    return axios.get(boardcastURL,  {
        params: {
            Tx: JSON.stringify({ type: 'crate_group', data: json })
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
    json = JSON.stringify(data);
    return axios.get(boardcastURL,  {
        params: {
            Tx: JSON.stringify({ type: '่join_group', data: json })
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
    json = JSON.stringify(data);
    return axios.get(boardcastURL,  {
        params: {
            Tx: JSON.stringify({ type: 'leave_group', data: json })
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
    json = JSON.stringify(data);
    return axios.get(boardcastURL, {
        params: {
            Tx: JSON.stringify({ type: 'read_message', data: json })
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

function sentMessage(user, group, message) {
    data = {
        user: user,
        group: group,
        message: message
    }
    json = JSON.stringify(data);
    return axios.get(boardcastURL, {
        params: {
            Tx: JSON.stringify({ type: 'send_message', data: json })
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
    sentMessage : sentMessage
};
