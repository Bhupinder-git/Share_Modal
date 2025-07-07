# JavaScript Profile Sharing Script Explanation

This JavaScript script creates a social media sharing system for a LinkedIn profile. Here's how it works:

## Variables Setup
```javascript
const profileUrl = 'https://www.linkedin.com/in/bhupinder-singh-8616b432b/';
const profileTitle = "Check out Bhupinder's profile";
const profileDescription = "I'm a Full Stack Web Developer...";
```
These three variables store the basic information that will be shared:
- **profileUrl**: The actual LinkedIn profile link
- **profileTitle**: A catchy headline for the share
- **profileDescription**: A detailed description of Bhupinder's skills and services

## Main Function: `shareProfile(platform)`
This function takes a platform name (like 'twitter', 'facebook', etc.) and creates the appropriate sharing URL for that platform.

### URL Encoding
```javascript
const encodedUrl = encodeURIComponent(profileUrl);
const encodedTitle = encodeURIComponent(profileTitle);
const encodedDescription = encodeURIComponent(profileDescription);
```
**`encodeURIComponent()`** - This method converts special characters (like spaces, quotes, etc.) into URL-safe format. For example, spaces become `%20`.

### Platform-Specific Sharing URLs
The `switch` statement creates different sharing URLs depending on the platform:

- **Twitter**: Uses Twitter's intent/tweet API with URL, title, and description
- **LinkedIn**: Uses LinkedIn's sharing API with URL and description as summary
- **Facebook**: Uses Facebook's sharer with URL and description as quote
- **Reddit**: Uses Reddit's submit form with URL and combined title/description
- **WhatsApp**: Uses WhatsApp's send API with formatted text message
- **Default**: Falls back to just the profile URL

### Opening the Share Window
```javascript
window.open(shareUrl, '_blank');
```
**`window.open()`** - This method opens a new browser window/tab with the generated sharing URL. The `'_blank'` parameter ensures it opens in a new tab.

## How It Works
1. You call `shareProfile('twitter')` or `shareProfile('facebook')`, etc.
2. The function encodes all the profile information for URL safety
3. It builds the correct sharing URL for that specific platform
4. It opens that URL in a new tab, taking the user to the platform's sharing interface

This script essentially automates the process of sharing a LinkedIn profile across different social media platforms with pre-filled content.

## Method Reference

### JavaScript Methods Used:
- **`encodeURIComponent()`**: Encodes special characters for URL safety
- **`window.open()`**: Opens a new browser window/tab with specified URL
- **`switch` statement**: Conditional logic to handle different platform cases