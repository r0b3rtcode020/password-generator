// Available character sets
const CHAR_SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.<>/?",
};

/**
 * Generates a random password based on the settings
 * @param {Object} settings
 * @param {number} settings.length - Password length (8-20)
 * @param {boolean} settings.lower - Include lowercase letters
 * @param {boolean} settings.upper - Include uppercase letters
 * @param {boolean} settings.numbers - Include numbers
 * @param {boolean} settings.symbols - Include symbols
 * @returns {string} generated password
 */
function generatePassword({ length, lower, upper, numbers, symbols }) {
  // Validate range
  if (length < 8 || length > 20) {
    throw new Error("Password length must be between 8 and 20 characters");
  }

  // Build character set
  let charset = "";
  if (lower) charset += CHAR_SETS.lower;
  if (upper) charset += CHAR_SETS.upper;
  if (numbers) charset += CHAR_SETS.numbers;
  if (symbols) charset += CHAR_SETS.symbols;

  if (!charset) {
    throw new Error("At least one character type must be selected");
  }

  // Generate password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

/**
 * Evaluates the strength of a password
 * Scale: 1 (very weak), 2 (weak), 3 (medium), 4 (strong)
 * @param {string} password
 * @returns {number} strength level
 */
function evaluateStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password) && /\W/.test(password)) score++;

  // Normalize to scale 1–4
  if (score <= 1) return 1;
  if (score === 2) return 2;
  if (score === 3) return 3;
  return 4;
}

export { generatePassword, evaluateStrength };
