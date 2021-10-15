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

// Update
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) return res.send(err);
      res.json(contact);
    }
  );
};

// Delete
export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.id }, err => {
    if (err) return res.send(err);
    res.send({ message: 'Successfully deleted contact' });
  });
};
