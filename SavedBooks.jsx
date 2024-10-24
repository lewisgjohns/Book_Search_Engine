const { data } = useQuery(GET_ME);
const [removeBook] = useMutation(REMOVE_BOOK);

const handleDeleteBook = async (bookId) => {
  try {
    await removeBook({
      variables: { bookId }
    });
    removeBookId(bookId); // Update UI after removal
  } catch (e) {
    console.error(e);
  }
};
