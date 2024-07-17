import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Update the Database');

// creates a connection to the database
const textDb= await openDB("jate",1);
//creates a new transaction and specifies the database, and privileges
const tx = textDb.transaction("jate","readwrite");
// opens up the desired object store
const store =tx.objectStore("jate");
//use the .put() on the store and content passed in
const request= store.put({id:1, value:content });
// confirming the request
const result = await request;
console.log("data saved to database", result);};


// logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Get from DataBase');

// create a connection to database and version
const textDb = await openDB("jate",1);
// creates a new transaction and specifies the database and privileges
const tx = textDb.transaction("jate","readonly");
// opens up the desired object store
const store =  tx.objectStore("jate");
//.get
const request = store.get(1);

//confirming the request

const result = await request;
console.log("result .value", result);
return result?.value;
};

initdb();
