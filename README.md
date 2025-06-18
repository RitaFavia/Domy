# Memory Diary

A React-based web app that works as a personal, interactive digital memory diary, designed to be shared via QR code.

## Features

- **Calendar View**: Navigate between months and years, with clickable days that open a memory view
- **Memory View**: When a day is clicked, shows a popup with text description, photos, and videos
- **Visual Indicators**: Days with memories are visually marked in the calendar
- **Animations**: Light fade/slide animations for transitions between calendar and memory view
- **Responsive Design**: Works well on both mobile and desktop devices

## Tech Stack

- React with functional components
- Tailwind CSS for styling
- Express.js for serving the built application

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd memory-diary
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```
   This will start the React development server at [http://localhost:3000](http://localhost:3000)

### Building for Production

1. Build the React application
   ```
   npm run build
   ```

2. Start the Express server to serve the built application
   ```
   npm run server
   ```
   This will start the server at [http://localhost:5000](http://localhost:5000)

3. Alternatively, you can build and start the server in one command
   ```
   npm run deploy
   ```

## Deployment

### GitHub Pages

To deploy to GitHub Pages:

1. Update the `package.json` file to include your GitHub repository:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>",
   ```

2. Install the `gh-pages` package:
   ```
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "scripts: {
     // other scripts
     "predeploy": "npm run build",
     "deploy-gh-pages": "gh-pages -d build"
   }
   ```

4. Deploy to GitHub Pages:
   ```
   npm run deploy-gh-pages
   ```

### QR Code Generation

After deploying your application, you can generate a QR code that links to your deployed app using services like:

- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)

## Customizing Memories

To add or modify memories, edit the `src/data/memories.js` file. Each memory should follow this format:

```javascript
"YYYY-MM-DD": {
  text: "Description of the memory",
  photos: ["URL to photo 1", "URL to photo 2"],
  videos: ["URL to video 1"]
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.