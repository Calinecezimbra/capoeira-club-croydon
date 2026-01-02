import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createRegistration } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendEmail, buildRegistrationEmail } from "./_core/email";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  registrations: router({
    create: publicProcedure
      .input(
        z.object({
          classType: z.string(),
          parentName: z.string().min(1, "Parent name is required"),
          parentEmail: z.string().email("Valid email is required"),
          parentPhone: z.string().optional(),
          childName: z.string().min(1, "Child name is required"),
          childAge: z.number().int().positive().optional(),
          additionalInfo: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database (skip if DB not available)
        try {
          await createRegistration(input);
        } catch (error) {
          console.warn("[Registration] Database save failed, continuing with email:", error);
        }

        // Notify owner
        const notificationTitle = `New ${input.classType} Registration`;
        const notificationContent = `
Parent: ${input.parentName}
Email: ${input.parentEmail}
${input.parentPhone ? `Phone: ${input.parentPhone}\n` : ''}Child: ${input.childName}${input.childAge ? ` (Age: ${input.childAge})` : ''}
${input.additionalInfo ? `\nAdditional Info: ${input.additionalInfo}` : ''}`;

        try {
          await notifyOwner({
            title: notificationTitle,
            content: notificationContent,
          });
        } catch (error) {
          console.warn("[Registration] Manus notification failed:", error);
        }

        // Send email to club inbox (primary notification method)
        try {
          const emailPayload = buildRegistrationEmail(input);
          await sendEmail(emailPayload);
        } catch (error) {
          console.error("[Registration] Email notification failed:", error);
        }

        return {
          success: true,
          message: "Registration submitted successfully! We'll be in touch soon.",
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
