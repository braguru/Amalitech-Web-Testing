const fs = require('fs');
const path = require('path');

// Define constants for the build directory and output manifest file
const BUILD_DIR = path.join(__dirname, '.next'); // Base directory for build artifacts
const OUTPUT_MANIFEST = path.join(BUILD_DIR, 'deploy-manifest.json'); // Manifest file path

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
        fileList = fileList.concat(getFilesRecursively(fullPath, baseDir));
      } else {
        fileList.push({
          key: relativePath.replace(/\\/g, '/'), // Normalize path separators
          size: stats.size,
          lastModified: stats.mtime.toISOString(),
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
    version: '1.0', // Manifest schema version
    files,
    directories: [], // Reserved for future use
    build: {
      artifactBaseDirectory: '.next',
      artifactFiles: files.map((file) => file.key), // Relative paths of files
    },
    routes: [], // Define routes if needed
  };

  try {
    fs.writeFileSync(OUTPUT_MANIFEST, JSON.stringify(manifest, null, 2));
    console.log(`deploy-manifest.json generated successfully at ${OUTPUT_MANIFEST}`);
  } catch (err) {
    console.error(`Error writing manifest file: ${OUTPUT_MANIFEST}`, err.message);
  }
}

// Execute the script
generateDeployManifest();
