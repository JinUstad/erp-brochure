# SKORA ERP - Professional Brochure

## Overview

This is a professional PDF brochure for SKORA ERP, a complete cloud-based School Management System by DevforDevs. The brochure is built as an interactive web application that can be easily converted to PDF.

## Brochure Contents

The brochure includes **15 comprehensive pages** designed to showcase SKORA ERP to school principals and administrators:

1. **Cover Page** - Eye-catching introduction with company tagline
2. **About DevforDevs** - Company background and services
3. **About SKORA ERP** - System overview and impact
4. **Complete Solution** - Five integrated platforms overview
5. **School Admin Panel** - Admin portal features and capabilities
6. **Teacher Web Portal** - Teacher platform features
7. **Mobile Applications** - Teacher and Parent app features
8. **Smart Features** - Key technical features
9. **Security & Reliability** - Security measures and certifications
10. **Key Benefits** - Business benefits for schools
11. **Pricing** - Setup and licensing costs
12. **Annual Subscription** - Per-student pricing tiers
13. **Optional Services** - Additional customization options
14. **Why Choose DevforDevs** - Competitive advantages
15. **Contact Page** - Contact information and call-to-action

## How to Use

### View the Brochure

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Use the navigation buttons at the bottom to browse through all 15 pages:
   - **Previous Button** - Go to the previous page
   - **Page Indicator** - Shows current page (e.g., "Page 1 of 15")
   - **Next Button** - Go to the next page

### Export as PDF

#### Option 1: Browser Print Dialog (Recommended)
1. Click the **"Print as PDF"** button in the bottom right
2. In the print dialog, ensure these settings:
   - **Destination**: "Save as PDF"
   - **Layout**: Portrait
   - **Margins**: Default or Minimal (as preferred)
   - **Background graphics**: Enable (for better colors)
3. Click **"Save"** and choose your location

#### Option 2: Use Browser Print Function
1. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
2. Follow the print settings above
3. Save as PDF

### Design Features

**Color Scheme** (Professional & Modern):
- Primary Blue: #2563EB
- Dark Navy: #0F172A
- Success Green: #10B981
- Light Background: #F8FAFC
- White Cards: #FFFFFF

**Typography**:
- Headlines: Poppins Bold / Default system fonts
- Body Text: Poppins Regular / Default system fonts
- Consistent sizing for easy reading

**Layout**:
- Full-height pages for optimal PDF display
- Responsive design that adapts to print settings
- Clear visual hierarchy with colors, spacing, and typography
- Rounded corners (8-20px) for modern appearance

## Pricing Information

- **Setup Package**: ₹18,000 (One-time)
  - Includes all 5 platforms (Website, Admin Panel, Teacher Portal, 2 Mobile Apps)
  - Initial setup, installation, training, and first year support

- **Annual Subscription**: ₹80 per student per year
  - Minimum pricing starts from ₹8,000 for 100 students
  - Scales up to ₹80,000+ for 1000+ student schools

- **Optional Services**: QR Attendance, UDISE Integration, Payroll Automation, Custom Apps, etc.

## Contact Information

**DevforDevs**
- Website: www.devfordevs.in
- Email: support@devfordevs.in
- Services: School ERP, Website Development, Mobile Apps, Custom Software

## Key Features Highlighted

✅ Cloud-based system with 24/7 access
✅ Role-based access control
✅ Real-time push notifications
✅ QR code attendance system
✅ Geofencing capabilities
✅ Automatic report card generation
✅ Worksheet generator
✅ Dark and light theme support
✅ Daily backup & audit logs
✅ Multi-device support
✅ Fast deployment
✅ Dedicated technical support

## Browser Compatibility

- Works on all modern browsers:
  - Chrome/Chromium
  - Firefox
  - Safari
  - Edge

## Customization

To customize the brochure content:

1. Edit `/app/page.tsx` - Main brochure component
2. Update color values in the gradient sections
3. Modify text content in each page array
4. Update the metadata in `/app/layout.tsx`

To change colors globally:
- Find color values like `#2563EB`, `#0F172A`, `#10B981` in the code
- Replace with your preferred colors

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **PDF Export**: Browser Print API

## File Structure

```
/app
  ├── page.tsx           # Main brochure component (15 pages)
  ├── layout.tsx         # Root layout with metadata
  └── globals.css        # Global styles
/public
  └── [assets]           # Static assets if needed
```

## Performance Tips

- The application is optimized for print quality
- Use "Minimal" margins in print settings for better space utilization
- Enable "Background graphics" for full color rendering
- Save at 100% scale for best results

## Support & Troubleshooting

**Issue**: Pages not displaying correctly
- Solution: Ensure you're using a modern browser and refresh the page

**Issue**: Print quality is poor
- Solution: Enable "Background graphics" in print settings

**Issue**: Navigation buttons not working
- Solution: Check browser console for errors, refresh the page

## Future Enhancements

Potential additions for future versions:
- Screenshots/mockups of actual dashboards
- Animated transitions between pages
- Interactive features demo
- Video embed capabilities
- Multi-language support
- Branding customization UI

---

**Last Updated**: July 2024
**Version**: 1.0
**Created by**: DevforDevs
