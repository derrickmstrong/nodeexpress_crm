import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Conact', ContactSchema);

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
