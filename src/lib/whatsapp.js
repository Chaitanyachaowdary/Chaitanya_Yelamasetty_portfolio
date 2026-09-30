// src/lib/whatsapp.js
// One place for the WhatsApp details, used by the contact card and the floating
// button so the number and the prefilled message never drift apart.
//
// wa.me wants the number in international format with no +, spaces or dashes.
export const WHATSAPP_NUMBER = '917993856293';

const GREETING = 'Hi Chaitanya, I found you through your portfolio.';

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`;
