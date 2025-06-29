# Portfolio Pages System

This directory contains the template system for creating portfolio project pages.

## File Structure:
```
Portfolio Pages/
├── template.html          # Master template for all project pages
├── project.css           # Shared stylesheet for all project pages
├── create-project.sh     # Script to generate new project pages
├── Portfolio Images/     # Directory for storing project screenshots
└── [project-folders]/    # Individual project directories
    └── index.html        # Project-specific HTML file
```

## Creating a New Project Page:

1. **Run the creation script:**
   ```bash
   ./create-project.sh "Your Project Name"
   ```

2. **This creates:**
   - A new folder with kebab-case name (e.g., "Your Project Name" → `your-project-name/`)
   - `index.html` file with proper template structure
   - `README.md` with customization instructions

3. **Customize your project:**
   - Edit `your-project-name/index.html` to add project-specific content
   - Replace placeholder text with actual project information
   - Update image paths to point to actual screenshots
   - Add real links for documentation and demos

## Key Features:

### ✅ **Shared Styling**
- All projects use the same `project.css` file (no duplication)
- Consistent design language across all project pages
- Easy to maintain and update styling site-wide

### ✅ **Proper Integration**
- All navigation links correctly point to main `index.html` sections
- Back button returns to portfolio section
- Consistent with main site's paper-like design theme

### ✅ **Responsive Design**
- Mobile-friendly layouts
- Proper breakpoints for different screen sizes
- Optimized typography and spacing

## File References:
- **Main Site Styles**: `../styles.css` 
- **Project Styles**: `../project.css`
- **Assets**: `../assets/` (logos, icons)
- **Images**: `Portfolio Images/` (project screenshots)
- **Scripts**: `../script.js`

## Navigation Structure:
- **Home** → `../index.html#home`
- **Portfolio** → `../index.html#portfolio`  
- **Notes** → `../index.html#notes`
- **Contact** → `../index.html#contact`
- **Back Button** → `../index.html#portfolio`

This system ensures consistency, maintainability, and proper integration with your main portfolio site.
