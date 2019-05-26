export const facebook = {
  clientID: 'YOUR ID',
  clientSecret: 'YOUR KEY',
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const google = {
  clientID: 'YOUR ID',
  clientSecret: 'YOUR KEY',
  callbackURL: 'http://localhost:3000/auth/google/callback',
};
