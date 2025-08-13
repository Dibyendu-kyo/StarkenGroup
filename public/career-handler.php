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
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$position = isset($data['position']) ? trim($data['position']) : '';
$experience = isset($data['experience']) ? trim($data['experience']) : '';
$skills = isset($data['skills']) ? trim($data['skills']) : '';
$education = isset($data['education']) ? trim($data['education']) : '';
$availability = isset($data['availability']) ? trim($data['availability']) : '';
$expectedSalary = isset($data['expectedSalary']) ? trim($data['expectedSalary']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Basic validation
if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || empty($position)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'First name, last name, email, phone, and position are required']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Sanitize inputs
$firstName = htmlspecialchars($firstName, ENT_QUOTES, 'UTF-8');
$lastName = htmlspecialchars($lastName, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$position = htmlspecialchars($position, ENT_QUOTES, 'UTF-8');
$experience = htmlspecialchars($experience, ENT_QUOTES, 'UTF-8');
$skills = htmlspecialchars($skills, ENT_QUOTES, 'UTF-8');
$education = htmlspecialchars($education, ENT_QUOTES, 'UTF-8');
$availability = htmlspecialchars($availability, ENT_QUOTES, 'UTF-8');
$expectedSalary = htmlspecialchars($expectedSalary, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$admin_email = 'enquiry@starkencw.com';
$subject = 'New Job Application - ' . $position . ' - Starken Ventures';

// Build email body
$email_body = "
New job application received:

Position Applied For: {$position}

Applicant Details:
Name: {$firstName} {$lastName}
Email: {$email}
Phone: {$phone}
Experience: {$experience}
Skills: {$skills}
Education: {$education}
Availability: {$availability}
Expected Salary: {$expectedSalary}
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

// Send auto-reply to applicant
$auto_reply_subject = 'Thank you for your application - Starken Ventures';
$auto_reply_body = "Dear {$firstName} {$lastName},

Thank you for your interest in the {$position} position at Starken Ventures. We have received your application and our HR team will review it carefully.

Application Details:
- Position: {$position}
- Experience: {$experience}

We will contact you within 5-7 business days if your profile matches our requirements.

Office: DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 411004
Phone: +91 94225 26219
Email: enquiry@starkencw.com

Best regards,
HR Team
Starken Ventures";

$auto_reply_headers = array(
    'From: enquiry@starkencw.com',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
);

$auto_reply_sent = mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));

// Log the submission
$log_entry = date('Y-m-d H:i:s') . " - {$firstName} {$lastName} ({$email}) - {$position}\n";
file_put_contents('career_log.txt', $log_entry, FILE_APPEND | LOCK_EX);

// Return response
if ($admin_sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your application has been submitted successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to submit application. Please try again later.']);
}
?>