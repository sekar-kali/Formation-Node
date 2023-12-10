const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// Index.js - Affichage de la liste des contacts
router.get('/', (req, res) => {
  contactsController.getAllContacts((contacts) => {
    res.render('index', { contacts });
  });
});

// add.js - Formulaire pour ajouter un nouveau contact
router.get('/add', (req, res) => {
  res.render('add');
});

// Action de soumission du formulaire pour ajouter un nouveau contact
router.post('/add', (req, res) => {
  const newContact = {
    gender: req.body.gender,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDay: req.body.birthDay,
    phone: req.body.phone,
    email: req.body.email,
  };

  contactsController.addContact(newContact, () => {
    res.redirect('/');
  });
});

// contact.js - Affichage de la liste des contacts en details

router.get('/contact/:lastName', (req, res) => {
    const lastName = req.params.lastName;

    contactsController.getContactByLastName(lastName, (contact) => {
        res.render('contact', { contact, index: req.query.index });
    });
});

// Action de suppression du contact
router.get('/deleteContactByIndex/:lastName', (req, res) => {
    const lastName = req.params.lastName;
    const contactIndex = req.query.index;
  
    contactsController.deleteContactByIndex(lastName, contactIndex, () => {
      res.redirect('/');
    });
  });

// Action de modification du contact
  router.get('/contact/modify/:lastName', (req, res) => {
    const lastName = req.params.lastName;
  
    contactsController.getContactByLastName(lastName, (contact) => {
      res.render('modifyContact', { contact });
    });
  });


  router.post('/contact/modify/:lastName', (req, res) => {
    const lastName = req.params.lastName;
  
    const updatedContact = {
      gender: req.body.gender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDay: req.body.birthDay,
      phone: req.body.phone,
      email: req.body.email,
    };
  
    contactsController.updateContact(lastName, updatedContact, () => {
      res.redirect('/');
    });
  });

  router.get('/contact/modify/:lastName', (req, res) => {
    const lastName = req.params.lastName;
  
    contactsController.getContactByLastName(lastName, (contact) => {
      res.render('modifyContact', { contact, isBirthdayToday: contactsController.isBirthdayToday });
    });
  });
// error.js - Affichage de la page erreur
  router.get('/example', (req, res, next) => {

    const err = new Error('This is an example error');
    next(err);
});
module.exports = router;