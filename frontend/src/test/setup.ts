import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Runs a cleanup after each test case to prevent test leakage
afterEach(() => {
  cleanup();
});
