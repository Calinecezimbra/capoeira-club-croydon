import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

interface MindfulMovesRegistrationDialogProps {
  className?: string;
  triggerText?: string;
}

export function MindfulMovesRegistrationDialog({
  className,
  triggerText = "Register Interest",
}: MindfulMovesRegistrationDialogProps) {
  const [open, setOpen] = useState(false);

  const createRegistration = trpc.registrations.create.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit registration. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    createRegistration.mutate({
      classType: "Mindful Moves",
      parentName: formData.get("name") as string,
      parentEmail: formData.get("email") as string,
      parentPhone: (formData.get("phone") as string) || undefined,
      childName: formData.get("name") as string,
      additionalInfo: (formData.get("accessNeeds") as string) || undefined,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Interest – Mindful Moves</DialogTitle>
          <DialogDescription>
            Enter your details below to register your interest for the{" "}
            <strong>Mindful Moves – Capoeira</strong> class (Wednesday 1:00 PM –
            3:00 PM, Lewisham). We'll be in touch with trimester enrolment
            details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" required placeholder="Your full name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" type="tel" placeholder="07700 900000" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="accessNeeds">Access / Support Needs (Optional)</Label>
            <Textarea
              id="accessNeeds"
              name="accessNeeds"
              placeholder="Please share any information that will help us support you (e.g. mobility, sensory, communication needs)"
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={createRegistration.isPending}>
              {createRegistration.isPending ? "Sending..." : "Submit Registration"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
