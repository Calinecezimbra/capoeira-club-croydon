import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database and notification functions
vi.mock("./db", () => ({
  createRegistration: vi.fn().mockResolvedValue({ insertId: 1 }),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createMockContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("registrations.create", () => {
  it("successfully creates a registration with all required fields", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.registrations.create({
      classType: "Parents & Kids",
      parentName: "John Doe",
      parentEmail: "john@example.com",
      parentPhone: "07700900000",
      childName: "Jane Doe",
      childAge: 8,
      additionalInfo: "Looking forward to joining!",
    });

    expect(result).toEqual({
      success: true,
      message: "Registration submitted successfully! We'll be in touch soon.",
    });
  });

  it("successfully creates a registration with only required fields", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.registrations.create({
      classType: "Kids SEND",
      parentName: "Jane Smith",
      parentEmail: "jane@example.com",
      childName: "Tom Smith",
    });

    expect(result).toEqual({
      success: true,
      message: "Registration submitted successfully! We'll be in touch soon.",
    });
  });

  it("rejects registration with invalid email", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.registrations.create({
        classType: "Parents & Kids",
        parentName: "John Doe",
        parentEmail: "invalid-email",
        childName: "Jane Doe",
      })
    ).rejects.toThrow();
  });

  it("rejects registration with missing required fields", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.registrations.create({
        classType: "Parents & Kids",
        parentName: "",
        parentEmail: "john@example.com",
        childName: "Jane Doe",
      })
    ).rejects.toThrow();
  });
});
