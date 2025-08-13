<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for CORS and JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate JSON data
if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

// Extract form data
$firstName = isset($data['firstName']) ? trim($data['firstName']) : '';
$lastName = isset($data['lastName']) ? trim($data['lastName']) : '';
$name = trim($firstName . ' ' . $lastName);
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$service = isset($data['service']) ? trim($data['service']) : '';
$projectType = isset($data['projectType']) ? trim($data['projectType']) : '';
$budget = isset($data['budget']) ? trim($data['budget']) : '';
$urgency = isset($data['urgency']) ? trim($data['urgency']) : '';
$quantity = isset($data['quantity']) ? trim($data['quantity']) : '';
$deliveryLocation = isset($data['deliveryLocation']) ? trim($data['deliveryLocation']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Basic validation
if (empty($firstName) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'First name and email are required']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$service = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
$projectType = htmlspecialchars($projectType, ENT_QUOTES, 'UTF-8');
$budget = htmlspecialchars($budget, ENT_QUOTES, 'UTF-8');
$urgency = htmlspecialchars($urgency, ENT_QUOTES, 'UTF-8');
$quantity = htmlspecialchars($quantity, ENT_QUOTES, 'UTF-8');
$deliveryLocation = htmlspecialchars($deliveryLocation, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$admin_email = 'enquiry@starkencw.com';
$subject = 'New Contact Form Submission - Starken Ventures';

// Build email body
$email_body = "
New contact form submission received:

Name: {$name}
Email: {$email}
Phone: {$phone}
Message: {$message}

Submitted on: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = array(
    'From: enquiry@starkencw.com',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
);

// Send email to admin
$admin_sent = mail($admin_email, $subject, $email_body, implode("\r\n", $headers));

// Send auto-reply to customer
$auto_reply_subject = 'Thank you for contacting Starken Ventures';
$auto_reply_body = "
Dear {$name},

Thank you for contacting Starken Ventures. We have received your inquiry and our team will get back to you within 24 hours.

We will review your message and contact you soon to discuss how we can help with your requirements.

Office Address:
DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 411004

Contact Information:
Phone: +91 94225 26219
Email: enquiry@starkencw.com

Best regards,
Starken Ventures Team
";

$auto_reply_headers = array(
    'From: enquiry@starkencw.com',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
);

$auto_reply_sent = mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));

// Log the submission
$log_entry = date('Y-m-d H:i:s') . " - {$name} ({$email}) - {$service}\n";
file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);

// Return response
if ($admin_sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
?>