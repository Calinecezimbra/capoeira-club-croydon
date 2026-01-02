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

interface RegisterInterestDialogProps {
  className?: string;
  classType: "Parents & Kids" | "Kids SEND";
  triggerText?: string;
}

export function RegisterInterestDialog({ 
  className, 
  classType,
  triggerText = "Register Interest" 
}: RegisterInterestDialogProps) {
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
    const childAge = formData.get("childAge") as string;
    
    createRegistration.mutate({
      classType,
      parentName: formData.get("parentName") as string,
      parentEmail: formData.get("email") as string,
      parentPhone: formData.get("phone") as string || undefined,
      childName: formData.get("childName") as string,
      childAge: childAge ? parseInt(childAge, 10) : undefined,
      additionalInfo: formData.get("message") as string || undefined,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Interest</DialogTitle>
          <DialogDescription>
            Enter your details below to register your interest for the <strong>{classType}</strong> class. 
            We'll contact you once we have confirmed start dates.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="parentName">Parent's Name</Label>
            <Input id="parentName" name="parentName" required placeholder="Your full name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" type="tel" placeholder="07700 900000" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="childName">Child's Name</Label>
            <Input id="childName" name="childName" required placeholder="Child's full name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="childAge">Child's Age (Optional)</Label>
            <Input id="childAge" name="childAge" type="number" placeholder="Age" min="0" max="18" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea id="message" name="message" placeholder="Any specific needs or questions?" />
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
