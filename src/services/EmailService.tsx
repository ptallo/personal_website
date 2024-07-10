import emailjs from '@emailjs/browser';

const PUBLIC_KEY = 'Y1gjyUOHVWRGsyFFz';
const SERVICE_ID = 'personal_website_email';
const TEMPLATE_ID = 'template_s2wh0fo';
const FORM_ID = '#contact-me-form';

emailjs.init({
    publicKey: PUBLIC_KEY,
})

const EmailService = {
    sendContactForm: (): Promise<any> => {
        return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, FORM_ID);
    }

}

export default EmailService;