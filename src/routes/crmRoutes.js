import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
} from '../controllers/crmController';

const routes = app => {
  app
    .route('/contacts')
    .get(getContacts) // Get ALL contacts
    .post(addNewContact); // Add new contact to database

  app
    .route('/contacts/:id')
    .get(getContactById) // Get contact BY ID 
    .put(updateContact)
    .delete((req, res) => {
      res.send('DELETE request successful');
    });
};

export default routes;
