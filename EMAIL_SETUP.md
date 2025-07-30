# Email Setup Guide for Starken Groups

## Quick Setup with Web3Forms (FREE)

### Step 1: Get Your Access Key
1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email: `enquiry@starkencw.com`
3. Click "Create Access Key"
4. Copy the access key you receive

### Step 2: Update the Code
Replace `'your-web3forms-key'` in both files with your actual access key:

**In Contact Form:**
- File: `src/components/Contact/Contact1.tsx`
- Line: `emailFormData.append('access_key', 'your-web3forms-key');`
- Replace with: `emailFormData.append('access_key', 'YOUR_ACTUAL_KEY_HERE');`

**In Career Form:**
- File: `src/components/Career/Career2.tsx`
- Line: `emailFormData.append('access_key', 'your-web3forms-key');`
- Replace with: `emailFormData.append('access_key', 'YOUR_ACTUAL_KEY_HERE');`

### Step 3: Test
- Fill out the contact form
- You should receive emails at `enquiry@starkencw.com`
- WhatsApp will also open automatically

## How It Works

### ✅ **Dual Delivery System:**
- **Email**: Sent via Web3Forms to `enquiry@starkencw.com`
- **WhatsApp**: Opens automatically for immediate contact
- **Works everywhere**: Development, production, any hosting

### ✅ **Features:**
- **Free service** - No monthly fees
- **No server setup** - Works with static hosting
- **Spam protection** - Built-in security
- **Professional emails** - Formatted properly
- **Instant delivery** - Real-time notifications

### ✅ **Email Content:**
- **Contact Form**: Name, email, phone, message
- **Career Form**: Full application details (resume note included)
- **Professional formatting** with company branding
- **Source tracking** - Shows it came from website

## Alternative: Hostinger PHP (Production Only)

The PHP files are still included and will work on Hostinger:
- `public/contact-handler.php`
- `public/career-handler.php`

These will automatically work when deployed to Hostinger without any setup.

## Benefits of This Approach

1. **Works in development** - No 405 errors
2. **Works in production** - Compatible with any hosting
3. **Dual delivery** - Email + WhatsApp for maximum reach
4. **No credentials needed** - Free service, no passwords
5. **Professional appearance** - Proper email formatting
6. **Immediate feedback** - Users get instant confirmation

Just replace the access key and you're ready to go!