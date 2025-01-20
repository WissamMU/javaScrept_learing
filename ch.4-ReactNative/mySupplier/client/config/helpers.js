export const transformName = name => {
    // Check if name is undefined or null before splitting
    if (name) {
      const userName = name.split(" ");
      return userName.map(letter => {
        const upperCaseLetter = letter.toUpperCase();
        return upperCaseLetter[0];
      }).join(" ");
    } else {
      // Handle the case where name is undefined or null
      return ""; // Or return any default value you prefer
    }
  };