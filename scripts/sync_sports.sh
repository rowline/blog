#!/bin/bash

# Configuration
# Path to the workout page project, relative to the blog root
WORKOUT_PAGE_DIR="../workout_page/workouts_page"
# Path to the sports page in the blog, relative to the blog root
SPORTS_PAGE_DIR="./static/sports"

# Ensure we are in the blog root
if [ ! -f "package.json" ]; then
    echo "Error: Please run this script from the blog root directory."
    exit 1
fi

echo "Starting sports page sync..."

# Clean up old sports page assets to avoid accumulation of hashed files
echo "Cleaning up old assets in $SPORTS_PAGE_DIR..."
# Keep index.html if it's there? Probably not, as it's generated.
# But let's be careful. The workout_page build produces index.html and assets.
# We should probably remove everything in static/sports to be safe, assuming it's all generated.
# Based on file listing, there are only generated files there.
rm -rf "$SPORTS_PAGE_DIR"/*

# Navigate to workout page directory
echo "Building workout page..."
cwd=$(pwd)
cd "$WORKOUT_PAGE_DIR" || exit 1

# Install dependencies if needed (optional, can be commented out if not desired)
# pnpm install

# Build the project
PATH_PREFIX=/sports/ pnpm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful."
else
    echo "Build failed."
    exit 1
fi

# Copy artifacts
echo "Copying artifacts to blog..."
# Verify dist directory exists
if [ ! -d "dist" ]; then
    echo "Error: dist directory not found in $WORKOUT_PAGE_DIR"
    exit 1
fi

cp -r dist/* "$cwd/$SPORTS_PAGE_DIR/"

# Return to original directory
cd "$cwd"

echo "Sync completed successfully."
