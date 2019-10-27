/* eslint-disable no-console */
import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import { collectionName } from './services/manga/constants';

module.exports = functions
  .region(functions.config().locale.region)
  .https.onRequest(async (req, res) => {
    const snap = await admin
      .firestore()
      .collection(collectionName.publishers)
      .get();
    const data = snap.docs.map(doc => doc.data());
    res.send({ data });
  });
