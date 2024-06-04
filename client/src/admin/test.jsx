export const logout = (req, res) => {
    // Clear the cookie by setting an expired cookie
    res.cookie('admin_token', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      expires: new Date(0) // Set the expiration date to a past date
    });
  
    // Return a success response
    res.json({ success: true, message: 'Logout successful' });
  };