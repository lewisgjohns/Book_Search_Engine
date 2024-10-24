const resolvers = {
    Query: {
      me: async (_, __, { user }) => {
        if (!user) throw new AuthenticationError('Not logged in');
        return await User.findById(user._id);
      }
    },
    Mutation: {
      login: async (_, { email, password }) => {
        const user = await User.findOne({ email });
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) throw new AuthenticationError('Incorrect credentials');
  
        const token = signToken(user);
        return { token, user };
      },
      // Other mutations (addUser, saveBook, removeBook)
    }
  };
  