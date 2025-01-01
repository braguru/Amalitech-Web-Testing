import { join } from 'node:path';
import { writeFileSync, mkdirSync, existsSync, cpSync, rmSync } from 'node:fs';

// Define all the Amplify related directories
const amplifyDirectories = [
    join(process.cwd(), '.amplify-hosting'),
    join(process.cwd(), '.amplify-hosting', 'static'),
    join(process.cwd(), '.amplify-hosting', 'static', '_next'),
    join(process.cwd(), '.amplify-hosting', 'compute'),
    join(process.cwd(), '.amplify-hosting', 'compute', 'default'),
    join(process.cwd(), '.next', 'compute', 'default'),
    join(process.cwd(), '.next'),
];

// Remove the .amplify-hosting directory if it exists
if (existsSync(amplifyDirectories[0])) rmSync(amplifyDirectories[0], { force: true, recursive: true });

// Create directories if they do not exist
amplifyDirectories.forEach((dir) => mkdirSync(dir, { recursive: true }));

// A general default configuration to fallback to compute if no matching static assets are found
const deployManifestConfig = {
    version: 1,
    routes: [
        {
            path: `/assets/*`,
            target: {
                kind: "Static",
            },
        },
        {
            path: `/*.*`,
            target: {
                kind: "Static",
            },
            fallback: {
                kind: "Compute",
                src: "default",
            },
        },
        {
            path: "/*",
            target: {
                kind: "Compute",
                src: "default",
            },
        },
    ],
    computeResources: [
        {
            name: "default",
            entrypoint: "server.js",
            runtime: "nodejs18.x",
        },
    ],
    framework: {
        name: "next",
        version: "14.2.22",
    },
};

// Write the config to .amplify-hosting/deploy-manifest.json
writeFileSync(
    join(process.cwd(), ".amplify-hosting", "deploy-manifest.json"),
    JSON.stringify(deployManifestConfig, null, 2)
);

writeFileSync(
    join(process.cwd(), ".next", "deploy-manifest.json"),
    JSON.stringify(deployManifestConfig, null, 2)
);

// Copy the static assets generated in .next/static and public to .amplify-hosting/static directory
cpSync(join(process.cwd(), 'public'), amplifyDirectories[1], { recursive: true });
cpSync(join(process.cwd(), '.next', 'static'), amplifyDirectories[2], { recursive: true });

// Copy the standalone server files to the appropriate compute directories
cpSync(join(process.cwd(), '.next', 'standalone'), amplifyDirectories[4], { recursive: true });
cpSync(join(process.cwd(), '.next', 'standalone'), amplifyDirectories[5], { recursive: true });
cpSync(join(process.cwd(), '.next', 'standalone'), amplifyDirectories[6], { recursive: true });

console.log(`deploy-manifest.json has been successfully generated at .amplify-hosting/deploy-manifest.json and .next/deploy-manifest.json`);
