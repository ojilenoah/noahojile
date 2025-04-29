# Vercel Deployment Guide

This document provides instructions for deploying this portfolio project to Vercel.

## Pre-Deployment Steps

1. Push your code to a GitHub repository (or use Vercel's import feature from Replit)

2. Make sure all your assets are properly referenced with relative paths

3. Ensure your project is working correctly in development mode

## Deployment Steps

1. Login to your Vercel account (or create one at https://vercel.com)

2. Click "New Project" and select your GitHub repository

3. Configure the project with the following settings:
   - Framework Preset: Vite
   - Build Command: `vite build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

4. Add any required environment variables under the "Environment Variables" section:
   - `NODE_ENV`: `production`

5. Click "Deploy" and wait for the build process to complete

## Post-Deployment

After deployment, you may need to check the following:

1. Verify all links and resources are loading correctly

2. Test the profile image toggle functionality

3. Test the CV download feature to ensure it works properly

4. Test the contact form functionality

## Troubleshooting

If you encounter issues with the deployment:

1. Check the build logs for any errors

2. Make sure all paths are correctly referenced

3. Verify your environment variables are set correctly

4. Ensure the vercel.json configuration is properly formatted