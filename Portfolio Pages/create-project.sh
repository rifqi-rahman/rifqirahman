#!/bin/bash

# Template generator script for portfolio projects
# Usage: ./create-project.sh "Project Name"

if [ -z "$1" ]; then
    echo "Usage: ./create-project.sh \"Project Name\""
    echo "Example: ./create-project.sh \"Expirate\""
    exit 1
fi

PROJECT_NAME="$1"
PROJECT_DIR="$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')"

# Create project directory
mkdir -p "$PROJECT_DIR"

# Copy only the HTML template (CSS is shared)
cp template.html "$PROJECT_DIR/index.html"

# Update the title and project name in the HTML file
sed -i '' "s/Portfolio project's Title/$PROJECT_NAME/g" "$PROJECT_DIR/index.html"
sed -i '' "s/Portfolio project's Title - Rifqi Rahman/$PROJECT_NAME - Rifqi Rahman/g" "$PROJECT_DIR/index.html"

# Create a simple README for the project
cat > "$PROJECT_DIR/README.md" << EOF
# $PROJECT_NAME

This is a portfolio project page for **$PROJECT_NAME**.

## Files Structure:
- \`index.html\` - Main project page
- Styling is handled by the shared \`../project.css\` file
- Images should be placed in \`../Portfolio Images/\` folder

## Customization:
1. Update the project title, description, and content in \`index.html\`
2. Replace image placeholders with actual project screenshots
3. Update contributor information and links
4. Add real documentation links

## Integration:
- All navigation links point back to the main portfolio site
- Uses shared styling from \`project.css\`
- Follows the same paper-like design theme
EOF

echo "✅ Project '$PROJECT_NAME' created successfully!"
echo "📁 Directory: $PROJECT_DIR"
echo "📝 Edit $PROJECT_DIR/index.html to customize your project page"
echo "🎨 Styling is shared via ../project.css (no need to duplicate CSS)"
echo "🖼️  Add project images to ../Portfolio Images/ folder"
