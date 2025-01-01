const fs = require('fs');
const path = require('path');

// Define constants for the build directory and output manifest file
const BUILD_DIR = path.join(__dirname, '.next'); // Adjust if needed
const OUTPUT_MANIFEST = path.join(BUILD_DIR, 'deploy-manifest.json'); // Save in the .next directory

/**
 * Recursively retrieves file details from a directory.
 *
 * @param {string} dir - Directory to scan for files.
 * @param {string} baseDir - Base directory to calculate relative paths.
 * @returns {Array} - List of file details including key, size, and lastModified.
 */
function getFilesRecursively(dir, baseDir = dir) {
  let fileList = [];
  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const relativePath = path.relative(baseDir, fullPath);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        // If it's a directory, recursively get files
        fileList = fileList.concat(getFilesRecursively(fullPath, baseDir));
      } else {
        // Add file details to the list
        fileList.push({
          key: relativePath.replace(/\\/g, '/'), // Normalize path separators
          size: stats.size, // File size in bytes
          lastModified: stats.mtime.toISOString(), // Last modified timestamp
        });
      }
    });
  } catch (err) {
    console.error(`Error reading directory: ${dir}`, err.message);
  }

  return fileList;
}

/**
 * Generates a deploy-manifest.json file.
 */
function generateDeployManifest() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`Error: Build directory does not exist at ${BUILD_DIR}`);
    return;
  }

  const files = getFilesRecursively(BUILD_DIR);

  const manifest = {
    version: '1.0', // Manifest version
    build: {
      artifactBaseDirectory: '.next', // Base directory for build artifacts
      artifactFiles: files.map((file) => file.key), // List of file paths
    },
    files, // Detailed file metadata
    directories: [], // Reserved for directory metadata if needed
    routes: [
      {
        source: '/<*>', // Wildcard route to handle all paths
        target: '/index.html', // Route to serve index.html
        status: 200, // HTTP status code
      },
    ],
  };

  try {
    // Write the manifest to the output file
    fs.writeFileSync(OUTPUT_MANIFEST, JSON.stringify(manifest, null, 2));
    console.log(`deploy-manifest.json generated successfully at ${OUTPUT_MANIFEST}`);
  } catch (err) {
    console.error(`Error writing manifest file: ${OUTPUT_MANIFEST}`, err.message);
  }
}

// Execute the script
generateDeployManifest();
