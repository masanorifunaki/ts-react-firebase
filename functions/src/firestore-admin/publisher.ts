/* eslint-disable no-loop-func */
import admin from 'firebase-admin';

import { collectionName } from '../services/manga/constants';
import { Publisher } from '../services/manga/models/publisher';

export const findPublisher = async (
  db: admin.firestore.Firestore,
  id: string,
) => {
  const doc = await db
    .collection(collectionName.publishers)
    .doc(id)
    .get();
  const publisher = doc.data() as Publisher;

  return { ...publisher, id: doc.id };
};
