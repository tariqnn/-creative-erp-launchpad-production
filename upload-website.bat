@echo off
echo 🌐 Creative ERP Launchpad - Website Upload Helper
echo ================================================

echo 📁 Your website files are ready in the 'dist' folder
echo.

echo 🎯 Choose your hosting provider:
echo 1. Namecheap (Recommended - Best Value)
echo 2. GoDaddy (Most Popular)
echo 3. Hostinger (Cheapest)
echo 4. Bluehost (WordPress Optimized)
echo 5. Custom FTP Upload
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto namecheap
if "%choice%"=="2" goto godaddy
if "%choice%"=="3" goto hostinger
if "%choice%"=="4" goto bluehost
if "%choice%"=="5" goto custom
goto invalid

:namecheap
echo 🏆 Namecheap Setup:
echo 1. Go to https://namecheap.com
echo 2. Search for your domain (e.g., creativeerp.com)
echo 3. Choose "Stellar Hosting" plan ($2.88/month)
echo 4. Complete purchase
echo 5. Login to account ^> Hosting List ^> Manage
echo 6. Go to File Manager ^> public_html folder
echo 7. Upload all files from 'dist' folder
echo 8. Create .htaccess file for SPA routing
echo 9. Enable SSL certificate
echo.
echo 💰 Total Cost: ~$43/year (domain + hosting)
goto files

:godaddy
echo 🏆 GoDaddy Setup:
echo 1. Go to https://godaddy.com
echo 2. Search for your domain
echo 3. Choose "Web Hosting" plan ($4.99/month)
echo 4. Complete purchase
echo 5. Login to account ^> My Products ^> Manage
echo 6. Go to File Manager ^> public_html folder
echo 7. Upload all files from 'dist' folder
echo 8. Create .htaccess file for SPA routing
echo 9. Enable SSL certificate
echo.
echo 💰 Total Cost: ~$73/year (domain + hosting)
goto files

:hostinger
echo 🏆 Hostinger Setup:
echo 1. Go to https://hostinger.com
echo 2. Search for your domain
echo 3. Choose "Premium" plan ($1.99/month)
echo 4. Complete purchase
echo 5. Login to account ^> Hosting ^> Manage
echo 6. Go to File Manager ^> public_html folder
echo 7. Upload all files from 'dist' folder
echo 8. Create .htaccess file for SPA routing
echo 9. Enable SSL certificate
echo.
echo 💰 Total Cost: ~$25/year (domain + hosting)
goto files

:bluehost
echo 🏆 Bluehost Setup:
echo 1. Go to https://bluehost.com
echo 2. Search for your domain
echo 3. Choose "Basic" plan ($2.95/month)
echo 4. Complete purchase
echo 5. Login to account ^> Hosting ^> Manage
echo 6. Go to File Manager ^> public_html folder
echo 7. Upload all files from 'dist' folder
echo 8. Create .htaccess file for SPA routing
echo 9. Enable SSL certificate
echo.
echo 💰 Total Cost: ~$48/year (domain + hosting)
goto files

:custom
echo 🖥️ Custom FTP Upload:
echo 1. Get FTP credentials from your hosting provider
echo 2. Use FileZilla or similar FTP client
echo 3. Connect to your server
echo 4. Upload all files from 'dist' folder to public_html
echo 5. Create .htaccess file for SPA routing
echo 6. Configure domain and SSL
goto files

:files
echo.
echo 📁 Files to upload from 'dist' folder:
dir dist
echo.
echo 📝 Create .htaccess file in public_html with this content:
echo.
echo RewriteEngine On
echo RewriteBase /
echo RewriteRule ^index\.html$ - [L]
echo RewriteCond %%{REQUEST_FILENAME} !-f
echo RewriteCond %%{REQUEST_FILENAME} !-d
echo RewriteRule . /index.html [L]
echo.
echo 🔒 Security headers:
echo Header always set X-Frame-Options DENY
echo Header always set X-Content-Type-Options nosniff
echo Header always set X-XSS-Protection "1; mode=block"
echo.
goto end

:invalid
echo ❌ Invalid choice. Please run the script again.
pause
exit /b 1

:end
echo.
echo ✅ Upload Checklist:
echo 1. Upload all files from 'dist' folder to public_html
echo 2. Create .htaccess file for SPA routing
echo 3. Set file permissions (644 for files, 755 for folders)
echo 4. Enable SSL certificate
echo 5. Configure domain DNS
echo 6. Test website accessibility
echo.
echo 🎉 Your Creative ERP Launchpad will be live!
echo 🌐 Your website will be available at: https://yourdomain.com
echo.
pause
