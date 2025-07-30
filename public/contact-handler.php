<?php
// Simple contact form handler for Hostinger
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method not allowed');
}

// Get form data
$firstName = isset($_POST['firstName']) ? trim($_POST['firstName']) : '';
$lastName = isset($_POST['lastName']) ? trim($_POST['lastName']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate required fields
if (empty($firstName) || empty($email) || empty($message)) {
    die('Please fill in all required fields');
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Please enter a valid email address');
}

// Email configuration
$to = 'enquiry@starkencw.com';
$subject = 'New Contact Form Submission - Starken Groups';

// Create email content
$emailContent = "
New Contact Form Submission - Starken Groups
=============================================

Name: {$firstName} {$lastName}
Email: {$email}
Phone: {$phone}

Message:
{$message}

---------------------------------------------
This message was sent from the Starken Groups contact form.
";

// Email headers for Hostinger
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send email using Hostinger's mail function
if (mail($to, $subject, $emailContent, $headers)) {
    echo '<script>alert("Thank you for your message! We will get back to you soon."); window.history.back();</script>';
} else {
    echo '<script>alert("Sorry, there was an error sending your message. Please try again later."); window.history.back();</script>';
}
?>