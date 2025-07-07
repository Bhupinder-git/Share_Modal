let overlay = document.querySelector('.overlay');
let share_modal = document.querySelector('.share-modal');

function openModal(){
    overlay.classList.add('overlay_on');
    share_modal.classList.add('share-modal_on');
}

function closeModal(){
    overlay.classList.remove('overlay_on');
    share_modal.classList.remove('share-modal_on');
}

// Profile URL to share
const profileUrl = 'https://www.linkedin.com/in/bhupinder-singh-8616b432b/';
const profileTitle = "Check out Bhupinder's profile";
const profileDescription = "I'm a Full Stack Web Developer with a passion for creating dynamic and user-friendly websites. With expertise in HTML, CSS, JavaScript, React, and Node.js, I build responsive and visually appealing web applications. Let's collaborate and turn your ideas into reality!";


// Function to share profile on various platforms
function shareProfile(platform) {
    const encodedUrl = encodeURIComponent(profileUrl);
    const encodedTitle = encodeURIComponent(profileTitle);
    const encodedDescription = encodeURIComponent(profileDescription);

    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&description=${encodedDescription}`;
            break;
        case 'linkedin':
            // LinkedIn doesn't directly support description in the URL, but we can add it to the summary parameter
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedDescription}`;
            break;
        case 'facebook':
            // Facebook allows description via Open Graph meta tags, but for direct sharing we can only use URL
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedDescription}`;
            break;
        case 'reddit':
            // Reddit supports title and URL, we can combine title with description
            shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle} - ${encodedDescription}`;
            break;
        case 'whatsapp':
            // WhatsApp allows free-form text
            shareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}: ${encodedUrl}  ${encodedDescription} `;
            break;
        default:
            shareUrl = profileUrl;
    }
    
    window.open(shareUrl, '_blank');
}