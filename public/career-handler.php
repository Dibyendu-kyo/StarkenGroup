<?php
// Simple career form handler for Hostinger
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method not allowed');
}

// Get form data
$firstName = isset($_POST['firstName']) ? trim($_POST['firstName']) : '';
$lastName = isset($_POST['lastName']) ? trim($_POST['lastName']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$position = isset($_POST['position']) ? trim($_POST['position']) : '';
$experience = isset($_POST['experience']) ? trim($_POST['experience']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || empty($position) || empty($experience)) {
    die('Please fill in all required fields');
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Please enter a valid email address');
}

// Handle file upload
$resumeInfo = '';
if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/resumes/';
    
    // Create directory if it doesn't exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    
    $fileName = time() . '_' . basename($_FILES['resume']['name']);
    $uploadPath = $uploadDir . $fileName;
    
    // Validate file type
    $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    $fileType = $_FILES['resume']['type'];
    
    // Also check by extension as backup
    $fileExtension = strtolower(pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION));
    $allowedExtensions = ['pdf', 'doc', 'docx'];
    
    if (!in_array($fileType, $allowedTypes) && !in_array($fileExtension, $allowedExtensions)) {
        die('Please upload a PDF, DOC, or DOCX file');
    }
    
    // Validate file size (5MB max)
    if ($_FILES['resume']['size'] > 5 * 1024 * 1024) {
        die('File size must be less than 5MB');
    }
    
    if (move_uploaded_file($_FILES['resume']['tmp_name'], $uploadPath)) {
        $resumeInfo = "Resume uploaded: {$_FILES['resume']['name']} (saved as: {$fileName})";
    } else {
        $resumeInfo = "Resume upload failed";
    }
} else {
    $resumeInfo = "No resume uploaded";
}

// Email configuration
$to = 'enquiry@starkencw.com';
$subject = 'New Job Application - ' . $position . ' - Starken Groups';

// Create email content
$emailContent = "
New Job Application - Starken Groups
====================================

Position Applied For: {$position}

Applicant Details:
------------------
Name: {$firstName} {$lastName}
Email: {$email}
Phone: {$phone}
Experience: {$experience}

" . (!empty($message) ? "Cover Letter/Message:\n{$message}\n\n" : "") . "

Resume: {$resumeInfo}

---------------------------------------------
This application was submitted through the Starken Groups career page.
";

// Email headers for Hostinger
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send email using Hostinger's mail function
if (mail($to, $subject, $emailContent, $headers)) {
    echo '<script>alert("Thank you for your application! We will review it and get back to you soon."); window.history.back();</script>';
} else {
    echo '<script>alert("Sorry, there was an error submitting your application. Please try again later."); window.history.back();</script>';
}
?>