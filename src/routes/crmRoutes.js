import {
  addNewContact,
  getContacts,
  getContactById,
} from '../controllers/crmController';

const routes = app => {
  app
    .route('/contacts')
    .get(getContacts) // Get ALL contacts
    .post(addNewContact); // Add new contact to database

  app
    .route('/contacts/:id')
    .get(getContactById)
    .put((req, res) => {
      res.send('PUT request successful');
    })
    .delete((req, res) => {
      res.send('DELETE request successful');
    });
};

export default routes;
