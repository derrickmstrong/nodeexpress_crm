import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from '../controllers/crmController';

const routes = app => {
  app
    .route('/contacts')
    .get(getContacts) // Get ALL contacts
    .post(addNewContact); // Add new contact to database

  app
    .route('/contacts/:id')
    .get(getContactById) // Get contact BY ID
    .put(updateContact) // Update contact (by id)
    .delete(deleteContact); // Delete contact  (by id)
};

export default routes;
