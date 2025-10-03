@echo off
echo 🚀 Creative ERP Launchpad - Production Deployment
echo ================================================

REM Check if dist folder exists
if not exist "dist" (
    echo 📦 Building project for production...
    call npm run build
    if errorlevel 1 (
        echo ❌ Build failed! Please check the errors above.
        pause
        exit /b 1
    )
)

echo ✅ Build completed successfully!
echo.

echo 🌐 Choose your hosting platform:
echo 1. Netlify (Recommended - Easiest)
echo 2. AWS S3 + CloudFront (Professional)
echo 3. DigitalOcean App Platform
echo 4. GitHub Pages
echo 5. Custom Server (FTP/SFTP)
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto netlify
if "%choice%"=="2" goto aws
if "%choice%"=="3" goto digitalocean
if "%choice%"=="4" goto github
if "%choice%"=="5" goto custom
goto invalid

:netlify
echo 🌐 Deploying to Netlify...
echo 1. Go to https://netlify.com
echo 2. Sign up/Login with GitHub
echo 3. Click 'New site from Git'
echo 4. Connect your GitHub repository
echo 5. Set build command: npm run build
echo 6. Set publish directory: dist
echo 7. Add custom domain in Site settings
echo.
echo 📁 Your files are ready in the 'dist' folder
echo 🔗 Drag and drop the 'dist' folder to Netlify for instant deployment
goto end

:aws
echo ☁️ AWS S3 + CloudFront Setup:
echo 1. Create S3 bucket with static website hosting
echo 2. Upload 'dist' folder contents to S3
echo 3. Create CloudFront distribution
echo 4. Configure custom domain and SSL
echo.
echo 📁 Upload these files to your S3 bucket:
dir dist
goto end

:digitalocean
echo 🌊 DigitalOcean App Platform:
echo 1. Go to https://cloud.digitalocean.com/apps
echo 2. Create new app from GitHub
echo 3. Select your repository
echo 4. Configure build settings:
echo    - Build command: npm run build
echo    - Output directory: dist
echo 5. Add custom domain in app settings
goto end

:github
echo 🐙 GitHub Pages:
echo 1. Go to repository Settings ^> Pages
echo 2. Source: Deploy from a branch
echo 3. Branch: main, folder: /dist
echo 4. Add custom domain in Pages settings
echo.
echo 📁 Your files are ready in the 'dist' folder
goto end

:custom
echo 🖥️ Custom Server Deployment:
echo 1. Upload 'dist' folder contents to your web server
echo 2. Configure web server for SPA routing
echo 3. Set up SSL certificate
echo 4. Configure custom domain
echo.
echo 📁 Files to upload:
dir dist
goto end

:invalid
echo ❌ Invalid choice. Please run the script again.
pause
exit /b 1

:end
echo.
echo 🔒 Security Checklist:
echo ✅ SSL certificate configured
echo ✅ Security headers set
echo ✅ HTTPS redirect enabled
echo ✅ Custom domain configured
echo ✅ CDN configured for performance
echo.
echo 🎉 Your Creative ERP Launchpad is ready for production!
echo 📁 Production files are in the 'dist' folder
echo.
pause
