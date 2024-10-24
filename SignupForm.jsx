const [addUser] = useMutation(ADD_USER);

const handleSignup = async (formData) => {
  try {
    const { data } = await addUser({
      variables: { ...formData }
    });
    localStorage.setItem('token', data.addUser.token);
    // redirect to another page
  } catch (e) {
    console.error(e);
  }
};
