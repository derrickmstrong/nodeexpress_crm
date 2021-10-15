import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

// Create
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) return res.send(err);
    res.json(contact);
  });
};

// Read
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
    if (err) return res.send(err);
    res.json(contact);
  });
};

export const getContactById = (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) return res.send(err);
    res.json(contact);
  });
};