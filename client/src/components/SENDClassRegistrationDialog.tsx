import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface Props {
  className?: string;
}

export function SENDClassRegistrationDialog({ className }: Props) {
  const [open, setOpen] = useState(false);
  const [timeConfirmation, setTimeConfirmation] = useState<string>("");
  const [parentName, setParentName] = useState("");
  const [kidName, setKidName] = useState("");
  const [kidAge, setKidAge] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (timeConfirmation !== "yes") {
      toast.error("Please confirm that Wednesday 5pm-6pm works for you");
      return;
    }

    if (!parentName || !kidName || !kidAge || !specialNeeds || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const message = `*Kids SEND Capoeira Registration*
    
*Time Confirmation:* Wednesday 5pm-6pm ✓
*Parent Name:* ${parentName}
*Child's Name:* ${kidName}
*Child's Age:* ${kidAge}
*Special Needs Specification:* ${specialNeeds}
*Email:* ${email}
*Phone:* ${phone}`;

    const whatsappUrl = `https://wa.me/447871378047?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...");
    setOpen(false);
    
    // Reset form
    setTimeConfirmation("");
    setParentName("");
    setKidName("");
    setKidAge("");
    setSpecialNeeds("");
    setEmail("");
    setPhone("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>Register Interest</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Kids SEND Capoeira Registration
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Is Wednesday 5pm-6pm a good time? *
              </Label>
              <RadioGroup value={timeConfirmation} onValueChange={setTimeConfirmation}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-send" />
                  <Label htmlFor="yes-send" className="cursor-pointer">Yes, that works for us!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-send" />
                  <Label htmlFor="no-send" className="cursor-pointer">No, I need a different time</Label>
                </div>
              </RadioGroup>
            </div>

            {timeConfirmation === "yes" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                  <Input
                    id="parentName"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="kidName">Child's Name *</Label>
                  <Input
                    id="kidName"
                    value={kidName}
                    onChange={(e) => setKidName(e.target.value)}
                    placeholder="Child's full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="kidAge">Child's Age *</Label>
                  <Input
                    id="kidAge"
                    type="number"
                    min="3"
                    max="18"
                    value={kidAge}
                    onChange={(e) => setKidAge(e.target.value)}
                    placeholder="e.g. 8"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialNeeds">Special Needs Specification *</Label>
                  <Textarea
                    id="specialNeeds"
                    value={specialNeeds}
                    onChange={(e) => setSpecialNeeds(e.target.value)}
                    placeholder="Please share any information that will help us support your child (e.g., sensory sensitivities, communication preferences, mobility needs, etc.)"
                    rows={4}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    This information helps us create the best experience for your child.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07123456789"
                    required
                  />
                </div>
              </>
            )}

            {timeConfirmation === "no" && (
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Thank you for your interest! Please contact us directly to discuss alternative time options.
                </p>
              </div>
            )}
          </div>

          {timeConfirmation === "yes" && (
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send Registration via WhatsApp
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
