#!/bin/bash

echo "🚀 Starting Scammerly Development Server..."

# Kill any existing Next.js processes
echo "Stopping any existing servers..."
pkill -f "next dev" 2>/dev/null || true

# Clean any corrupted build files
echo "Cleaning build cache..."
rm -rf .next 2>/dev/null || true
rm -rf node_modules/.cache 2>/dev/null || true

# Start the development server
echo "Starting development server..."
npm run dev 