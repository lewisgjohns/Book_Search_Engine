const [saveBook] = useMutation(SAVE_BOOK);

const handleSaveBook = async (book) => {
  try {
    await saveBook({
      variables: { input: book }
    });
  } catch (e) {
    console.error(e);
  }
};
