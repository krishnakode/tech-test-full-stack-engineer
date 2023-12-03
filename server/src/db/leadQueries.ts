const db = require('./db');

const getAllLeads = (callback) => {
  const query = 'select j.id, j.status, j.contact_name, j.contact_phone, j.contact_email, j.price, j.description, j.created_at, c.name as category, s.name as suburb, s.postcode  from jobs as j inner join categories as c on j.category_id=c.id inner join suburbs as s on s.id=j.suburb_id';
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

const updateLeadStatus = (leadId, status, callback) => {
  const query = `UPDATE jobs SET status = "${status}" WHERE id = ${leadId}`;
  db.query(query, [leadId], (err) => {
    callback(err);
  });
};

export { getAllLeads, updateLeadStatus };
