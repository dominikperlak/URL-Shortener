import { getDatabase, ref, set, get } from 'firebase/database';

const db = getDatabase();

export const writeToFirebase = async (urlCode, urlInput) => {
  try {
    await set(ref(db, `urls/${urlCode}`), {
      url: urlInput,
    });
  } catch (error) {
    console.log(error);
  }
};

export const readFromFirebase = async (urlCode) => {
  try {
    const snapshot = await get(ref(db, `urls/${urlCode}`));
    if (snapshot.exists()) {
      const url = snapshot.val().url;
      return url;
    } else {
      console.log("URL doesn't exist");
    }
  } catch (error) {
    console.log(error);
  }
};
