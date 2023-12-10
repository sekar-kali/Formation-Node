const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const contactsFilePath = './contacts/contacts.csv';

function getAllContacts(callback) {
  const contacts = [];
  fs.createReadStream(contactsFilePath)
    .pipe(csv())
    .on('data', (data) => contacts.push(data))
    .on('end', () => {
      callback(contacts);
    });
}

function addContact(newContact, callback) {
  const csvWriter = createCsvWriter({
    path: contactsFilePath,
    header: [
      { id: 'gender', title: 'gender' },
      { id: 'firstName', title: 'firstName' },
      { id: 'lastName', title: 'lastName' },
      { id: 'birthDay', title: 'birthDay' },
      { id: 'phone', title: 'phone' },
      { id: 'email', title: 'email' },
    ],
    append: true,
  });

  csvWriter
    .writeRecords([newContact])
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

function deleteContactByIndex(lastName, contactIndex, callback) {
  const contacts = [];
  fs.createReadStream(contactsFilePath)
      .pipe(csv())
      .on('data', (data) => contacts.push(data))
      .on('end', () => {
          const contactToDelete = contacts.findIndex((c) => c.lastName === lastName);

          if (contactToDelete !== -1) {
              contacts.splice(contactToDelete, 1);

              const csvWriter = createCsvWriter({
                  path: contactsFilePath,
                  header: [
                      { id: 'gender', title: 'gender' },
                      { id: 'firstName', title: 'firstName' },
                      { id: 'lastName', title: 'lastName' },
                      { id: 'birthDay', title: 'birthDay' },
                      { id: 'phone', title: 'phone' },
                      { id: 'email', title: 'email' },
                  ],
              });

              csvWriter.writeRecords(contacts).then(() => {
                  callback();
              });
          }
      });
}

function getContactByLastName(lastName, callback) {
  const contacts = [];
  fs.createReadStream(contactsFilePath)
      .pipe(csv())
      .on('data', (data) => contacts.push(data))
      .on('end', () => {
          const contact = contacts.find((c) => c.lastName === lastName);
          callback(contact);
      });
}
function updateContact(lastName, updatedContact, callback) {
  const contacts = [];
  fs.createReadStream(contactsFilePath)
    .pipe(csv())
    .on('data', (data) => contacts.push(data))
    .on('end', () => {
      const contactIndex = contacts.findIndex((c) => c.lastName === lastName);

      if (contactIndex !== -1) {
        contacts[contactIndex] = { ...contacts[contactIndex], ...updatedContact };

        const csvWriter = createCsvWriter({
          path: contactsFilePath,
          header: [
            { id: 'gender', title: 'gender' },
            { id: 'firstName', title: 'firstName' },
            { id: 'lastName', title: 'lastName' },
            { id: 'birthDay', title: 'birthDay' },
            { id: 'phone', title: 'phone' },
            { id: 'email', title: 'email' },
          ],
        });

        csvWriter.writeRecords(contacts).then(() => {
          callback();
        });
      }
    });
}

function isBirthdayToday(birthDay) {
  const today = new Date();
  const birthday = new Date(birthDay);

  return (
    today.getDate() === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  );
}

exports.isBirthdayToday = isBirthdayToday;
exports.updateContact = updateContact;
exports.getAllContacts = getAllContacts;
exports.addContact = addContact;
exports.deleteContactByIndex = deleteContactByIndex;
exports.getContactByLastName = getContactByLastName;