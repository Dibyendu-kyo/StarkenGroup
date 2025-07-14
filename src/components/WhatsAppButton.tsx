"use client";
import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?94984';
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    
    const options = {
      "enabled": true,
      "chatButtonSetting": {
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginRight": "25",
        "marginBottom": "90",
        "ctaIconWATI": false,
        "position": "right"
      },
      "brandSetting": {
        "brandName": "Wati",
        "brandSubTitle": "undefined",
        "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello! I'm interested in learning more about Starken Groups and your services. Could you please provide me with more information?",
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "+91 9422526219"
      }
    };
    
    s.onload = function() {
      // @ts-expect-error: The CreateWhatsappChatWidget function is injected by the external WATI script and is not typed.
      CreateWhatsappChatWidget(options);
    };
    
    const x = document.getElementsByTagName('script')[0];
    x.parentNode?.insertBefore(s, x);
  }, []);

  return null; // The WATI script will create the button
} 