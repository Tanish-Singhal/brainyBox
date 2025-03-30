export const generateHash = (len: number) => {
  const chars = "qwertyuiopasdfghjklzxcvbnm7894561230";
  let ans = "";

  for (let i = 0; i < len; i++) {
    ans = ans + chars[Math.floor(Math.random() * chars.length)];
  }
  return ans;
} 