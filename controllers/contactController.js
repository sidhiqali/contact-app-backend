//@desc get contacts
//@route GET /api/contacts/
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

//@desc create contact
//@route POST /api/contacts/
//@access public

const createContact = (req, res) => {
  res.status(200).json({ message: 'create contact' });
};

//@desc get contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

//@desc get contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//@desc get contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}