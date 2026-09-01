import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

const isGitHubActions = process.env["GITHUB_ACTIONS"] === "true";
const repositoryName = process.env["GITHUB_REPOSITORY"]?.split("/")[1] ?? "";
const githubBase = isGitHubActions && repositoryName ? `/${repositoryName}/` : "/";

export default defineConfig({
  // GitHub Pages only serves static files. Keep the Lovable server config
  // inside Lovable, and generate a fully static site everywhere else.
  nitro: isLovableSandbox ? undefined : false,

  vite: {
    base: isLovableSandbox ? "/" : githubBase,
  },

  tanstackStart: isLovableSandbox
    ? {
        server: { entry: "server" },
      }
    : {
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
        pages: [
          { path: "/" },
          { path: "/politica-de-privacidade" },
          { path: "/termos-de-uso" },
        ],
      },
});
