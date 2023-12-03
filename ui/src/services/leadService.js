const apiUrl = 'http://localhost:8080';

export const getLeads = async () => {
  try {
  const response = await fetch(`${apiUrl}/leads`);
  const data = await response.json();
  return data;
  } catch(error) {
    console.log(error)
  }
};

export const acceptLead = async (leadId, callback) => {
  await fetch(`${apiUrl}/leads/${leadId}/active`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: 'active'
    }),
  }).then(res => {
    if (res.ok) {
      callback({leadId, status: 'active'})
    } else {
      callback({
        leadId,
        error: "something went wrong!"
      })
    }
  }).catch((error) => {
    console.log("error:", error);
    callback({
      leadId,
      error: "something went wrong!"
    })
  });
};

export const declineLead = async (leadId, callback) => {
  await fetch(`${apiUrl}/leads/${leadId}/declined`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: 'declined'
    }),
  }).then(res => {
    if (res.ok) {
      callback({leadId, status: 'declined'})
    } else {
      callback({
        leadId,
        error: "something went wrong!"
      })
    }
  }).catch((error) => {
    console.log(error);
    callback({
      leadId,
      error: "something went wrong!"
    })
  });
}