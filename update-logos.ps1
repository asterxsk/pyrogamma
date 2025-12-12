# Batch update all remaining HTML files to replace SVG with PNG logo

$files = @("stories.html", "newsletter.html", "about.html", "contact.html")

foreach ($file in $files) {
    Write-Host "Updating $file..."
    
    # Read file content
    $content = Get-Content $file -Raw
    
    # Replace nav SVG logo
    $content = $content -replace '(?s)<svg class="logo-icon".*?</svg>', '<img src="images/phoenix-logo.png" alt="Pyrogamma" class="logo-icon">'
    
    # Replace footer SVG logo
    $content = $content -replace '(?s)<svg class="footer-logo-icon".*?</svg>', '<img src="images/phoenix-logo.png" alt="Pyrogamma" class="footer-logo-icon">'
    
    # Write back
    Set-Content -Path $file -Value $content -NoNewline
    
    Write-Host "$file updated successfully!"
}

Write-Host "All files updated!"
