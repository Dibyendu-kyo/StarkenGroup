<?php
// Simple PHP router for fallback
$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

// Remove leading slash
$path = ltrim($path, '/');

// If empty, serve index.html
if (empty($path)) {
    include 'index.html';
    exit;
}

// Check if HTML file exists
$htmlFile = $path . '.html';
if (file_exists($htmlFile)) {
    include $htmlFile;
    exit;
}

// Check if directory with index.html exists
if (is_dir($path) && file_exists($path . '/index.html')) {
    include $path . '/index.html';
    exit;
}

// Fallback to main index.html for SPA routing
include 'index.html';
?>