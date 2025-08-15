import type { NextConfig } from "next";

export default {
	// Temp fix to silence dart sass depreciation warnings
	// We have to wait for Next.js to use the "modern-js-api" by default
	// Info: https://github.com/vercel/next.js/issues/71638
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"]
	},

	// Remove ESLint from the build, as we run this separately as part of our "npm run build" command
	// The reason we do this is so that we can use the "--fix" flag to autofix linting errors
	eslint: {
		ignoreDuringBuilds: true
	}
} satisfies NextConfig;
