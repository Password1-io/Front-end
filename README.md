# Password1

**One Password, Infinite Security** - Generate unique, secure passwords for every website using just one master password.

## What is Password1?

Password1 is a deterministic password generator that creates unique, secure passwords for any website. Enter your master password and a website name, and Password1 will always generate the same unique password for that combination.

### Key Features

- 🔒 **100% Client-Side** - Your password never leaves your device
- 🔐 **SHA-512 Encryption** - Industry-standard cryptographic hashing
- 💾 **Zero Storage** - Nothing is saved or transmitted
- 🌓 **Dark/Light Mode** - Comfortable viewing in any environment
- ⚡ **Instant Generation** - Passwords update as you type
- 📱 **Responsive Design** - Works on desktop and mobile

## How It Works

1. Enter your **master password** (the only password you need to remember)
2. Enter the **website** name (e.g., "google", "amazon", "netflix")
3. Adjust optional settings (password length, special characters)
4. Your unique password is generated instantly

The same master password + website combination will always produce the same password, so you can regenerate it anytime without storing anything.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Web Crypto API** - SHA-512 hashing (browser-native)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Security

- All password generation happens locally in your browser
- No data is ever sent to any server
- The algorithm is open source and auditable
- Uses SHA-512 with multiple rounds of hashing

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Algorithm

The password generation algorithm (Version: June Lake) uses:
- SHA-512 hashing with prime number iterations
- Deterministic special character and capitalization placement
- Guaranteed password requirements (uppercase, lowercase, numbers, special chars)

See `src/lib/generatePassword.js` for the full implementation.

---

Built with security in mind. [View on GitHub](https://github.com/your-username/password1)

