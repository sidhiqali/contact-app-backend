const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');

//@desc get contacts
//@route GET /api/contacts/
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc create contact
//@route POST /api/contacts/
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('can not  be empty');
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(200).json(contact);
});

//@desc get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('contact not found');
  }
  res.status(200).json(contact);
});

//@desc get contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('contact not found');
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
     req.body, 
     {new: true});
  res.status(200).json(updateContact);
});

//@desc get contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('contact not found');
  }
  await Contact.deleteOne()
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
