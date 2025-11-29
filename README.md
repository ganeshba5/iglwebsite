# InfoGlobalLink - Coming Soon Website

A beautiful, modern "Coming Soon" page for infogloballink.com, ready to deploy on Azure Static Web Apps.

## Features

- Modern, responsive design with gradient background
- Horizontally scrolling marquee for messages
- Smooth animations and transitions
- Mobile-friendly responsive layout
- Ready for Azure Static Web Apps deployment

## Files Structure

- `index.html` - Main HTML file
- `styles.css` - Styling and animations
- `script.js` - JavaScript for marquee functionality
- `staticwebapp.config.json` - Azure Static Web Apps configuration

## Customization

### Update Marquee Messages

You can update the marquee messages in two ways:

1. **Static Update**: Edit the HTML in `index.html` (lines with `marquee-item` class)
2. **Dynamic Update**: Use the `updateMarqueeMessages()` function in `script.js`

Example:
```javascript
updateMarqueeMessages([
    '🚀 New feature launching soon',
    '✨ Big announcement coming',
    '🌟 Stay connected with us'
]);
```

## Deployment to Azure Static Web Apps

1. **Via Azure Portal:**
   - Create a new Static Web App resource
   - Connect your GitHub repository or upload files
   - The `staticwebapp.config.json` will be automatically used

2. **Via Azure CLI:**
   ```bash
   az staticwebapp create \
     --name infogloballink \
     --resource-group <your-resource-group> \
     --location <region>
   ```

3. **Via GitHub Actions:**
   - Push this code to a GitHub repository
   - Azure will automatically detect and set up CI/CD

## Local Testing

Simply open `index.html` in a web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000`

