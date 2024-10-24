const [addUser] = useMutation(LOGIN_USER);

const handleSignup = async (formData) => {
  try {
    const { data } = await loginUser({
      variables: { ...formData }
    });
    localStorage.setItem('token', data.addUser.token);
    // redirect to another page
  } catch (e) {
    console.error(e);
  }
};
