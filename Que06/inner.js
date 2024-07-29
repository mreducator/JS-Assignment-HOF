function validateLinkedInUrl(url) {
    const linkedinUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    const result = linkedinUrlRegex.test(url);
    if (result) {
      console.log('Valid LinkedIn profile URL');
    } else {
      console.log('Invalid LinkedIn profile URL');
    }
  }
  const urls = [
    'https://www.linkedin.com/in/john-doe123',        
    'https://www.linkedin.com/in/jane_doe_456',       
    'https://www.linkedin.com/in/short',              
    'https://www.linkedin.com/in/verylongprofileidthatshouldfail', 
    'https://www.linkedin.com/in/invalid-characters!', 
    'http://www.linkedin.com/in/john-doe123'          
  ];
  urls.forEach(url => validateLinkedInUrl(url));
  