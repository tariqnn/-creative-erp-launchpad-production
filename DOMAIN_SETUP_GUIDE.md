# 🌐 Complete Domain + Hosting Setup Guide

## 🎯 **Recommended: Namecheap (Best Value)**

### **Step 1: Purchase Domain + Hosting**
1. Go to [namecheap.com](https://namecheap.com)
2. Search for your domain (e.g., `creativeerp.com`)
3. Choose **"Stellar Hosting"** plan ($2.88/month)
4. Add domain to cart
5. Complete purchase

### **Step 2: Configure Hosting**
1. Login to Namecheap account
2. Go to **"Hosting List"**
3. Click **"Manage"** next to your hosting
4. Go to **"File Manager"**
5. Navigate to `public_html` folder

### **Step 3: Upload Your Website**
1. **Upload all files** from your `dist` folder to `public_html`
2. **Set permissions** for files (644) and folders (755)
3. **Create .htaccess** file for SPA routing:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### **Step 4: Configure Domain**
1. Go to **"Domain List"**
2. Click **"Manage"** next to your domain
3. Set **Nameservers** to:
   - `dns1.registrar-servers.com`
   - `dns2.registrar-servers.com`
4. Wait 24-48 hours for DNS propagation

### **Step 5: Enable SSL**
1. Go to **"Hosting List"** > **"Manage"**
2. Click **"SSL"** tab
3. Enable **"Free SSL Certificate"**
4. Wait for activation (usually 5-10 minutes)

---

## 🏆 **Alternative: GoDaddy (Most Popular)**

### **Step 1: Purchase Domain + Hosting**
1. Go to [godaddy.com](https://godaddy.com)
2. Search for your domain
3. Choose **"Web Hosting"** plan ($4.99/month)
4. Add domain to cart
5. Complete purchase

### **Step 2: Configure Hosting**
1. Login to GoDaddy account
2. Go to **"My Products"**
3. Click **"Manage"** next to Web Hosting
4. Go to **"File Manager"**
5. Navigate to `public_html` folder

### **Step 3: Upload Your Website**
1. **Upload all files** from your `dist` folder to `public_html`
2. **Create .htaccess** file for SPA routing
3. **Set file permissions** (644 for files, 755 for folders)

### **Step 4: Configure Domain**
1. Go to **"My Products"** > **"Domains"**
2. Click **"Manage"** next to your domain
3. Set **Nameservers** to:
   - `ns1.godaddy.com`
   - `ns2.godaddy.com`
4. Wait for DNS propagation

---

## 💰 **Cost Comparison**

| Provider | Monthly Cost | Domain Cost | Total/Year | Features |
|----------|-------------|-------------|------------|----------|
| **Namecheap** | $2.88 | $8.88 | $43.44 | ⭐⭐⭐⭐⭐ |
| **GoDaddy** | $4.99 | $12.99 | $72.87 | ⭐⭐⭐⭐ |
| **Hostinger** | $1.99 | $0.99 | $24.87 | ⭐⭐⭐ |
| **Bluehost** | $2.95 | $12.99 | $48.39 | ⭐⭐⭐⭐ |

---

## 🔧 **Technical Setup (After Purchase)**

### **1. Upload Files**
```bash
# Your files are ready in the 'dist' folder
# Upload these files to public_html:
- index.html
- assets/ (folder)
- favicon.ico
- favicon.svg
- robots.txt
- sw.js
```

### **2. Create .htaccess File**
Create a file named `.htaccess` in your `public_html` folder:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

### **3. Configure Email (Optional)**
1. Go to hosting control panel
2. Create email accounts (e.g., `info@yourdomain.com`)
3. Set up email forwarding
4. Configure email client (Outlook, Gmail, etc.)

---

## 🚀 **Quick Start Commands**

```bash
# 1. Build your website
npm run build

# 2. Your files are ready in 'dist' folder
# 3. Upload to hosting provider
# 4. Configure domain and SSL
# 5. Your website is live!
```

---

## 📞 **Support & Help**

- **Namecheap Support**: [support.namecheap.com](https://support.namecheap.com)
- **GoDaddy Support**: [help.godaddy.com](https://help.godaddy.com)
- **Hostinger Support**: [support.hostinger.com](https://support.hostinger.com)

---

## ✅ **Final Checklist**

- [ ] ✅ Domain purchased
- [ ] ✅ Hosting plan activated
- [ ] ✅ Files uploaded to public_html
- [ ] ✅ .htaccess file created
- [ ] ✅ SSL certificate enabled
- [ ] ✅ Domain pointing to hosting
- [ ] ✅ Website accessible via domain
- [ ] ✅ HTTPS redirect working
- [ ] ✅ Email accounts configured

---

**🎉 Your Creative ERP Launchpad will be live at your custom domain!**
