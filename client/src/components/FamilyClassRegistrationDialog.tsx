import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface Props {
  className?: string;
}

export function FamilyClassRegistrationDialog({ className }: Props) {
  const [open, setOpen] = useState(false);
  const [timeConfirmation, setTimeConfirmation] = useState<string>("");
  const [parentName, setParentName] = useState("");
  const [kidsNames, setKidsNames] = useState("");
  const [kidsAges, setKidsAges] = useState("");
  const [totalParticipants, setTotalParticipants] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (timeConfirmation !== "yes") {
      toast.error("Please confirm that Saturday 10am-11am works for you");
      return;
    }

    if (!parentName || !kidsNames || !kidsAges || !totalParticipants || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const message = `*Family Capoeira Registration*
    
*Time Confirmation:* Saturday 10am-11am ✓
*Parent Name:* ${parentName}
*Kids Name(s):* ${kidsNames}
*Kids Age(s):* ${kidsAges}
*Total Family Participants:* ${totalParticipants}
*Email:* ${email}
*Phone:* ${phone}`;

    const whatsappUrl = `https://wa.me/447871378047?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...");
    setOpen(false);
    
    // Reset form
    setTimeConfirmation("");
    setParentName("");
    setKidsNames("");
    setKidsAges("");
    setTotalParticipants("");
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
            Parents & Kids Capoeira Registration
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Is Saturday 10am-11am a good time for your family? *
              </Label>
              <RadioGroup value={timeConfirmation} onValueChange={setTimeConfirmation}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="cursor-pointer">Yes, that works for us!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="cursor-pointer">No, I need a different time</Label>
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
                  <Label htmlFor="kidsNames">Kids Name(s) *</Label>
                  <Input
                    id="kidsNames"
                    value={kidsNames}
                    onChange={(e) => setKidsNames(e.target.value)}
                    placeholder="e.g. João, Maria"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="kidsAges">Kids Age(s) *</Label>
                  <Input
                    id="kidsAges"
                    value={kidsAges}
                    onChange={(e) => setKidsAges(e.target.value)}
                    placeholder="e.g. 7, 10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalParticipants">Total Family Participants *</Label>
                  <Input
                    id="totalParticipants"
                    type="number"
                    min="2"
                    value={totalParticipants}
                    onChange={(e) => setTotalParticipants(e.target.value)}
                    placeholder="e.g. 4"
                    required
                  />
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
