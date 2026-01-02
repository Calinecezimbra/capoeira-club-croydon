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
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

interface EventRegistrationDialogProps {
  className?: string;
  triggerText?: string;
}

export function EventRegistrationDialog({ 
  className,
  triggerText = "Register Interest" 
}: EventRegistrationDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketType, setTicketType] = useState<"1-day" | "2-day">("2-day");
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    groupName: "",
    fromAbroad: false,
    needAccommodation: false,
    attendAfterParty: false,
    whatsappReceipt: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const generateWhatsAppMessage = () => {
    const price = ticketType === "1-day" ? "£50" : "£75";
    const days = ticketType === "1-day" ? "1 day" : "2 days";
    const message = `Hello! I would like to register for the Black History Month Celebration event (16/17 October 2026):

Name: ${formData.name}
Capoeira Nickname: ${formData.nickname || "N/A"}
Email: ${formData.email}
Phone: ${formData.phone}
Group Name: ${formData.groupName}
Ticket Type: ${ticketType === "1-day" ? "1 Day" : "2 Days"}
Coming from Abroad: ${formData.fromAbroad ? "Yes" : "No"}
Need Accommodation: ${formData.needAccommodation ? "Yes" : "No"}
Participate in After Party: ${formData.attendAfterParty ? "Yes" : "No"}
Event Price: ${price} (${days})

Please confirm my registration.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to a backend
      // For now, we'll just show a success message and prepare WhatsApp link
      
      if (formData.whatsappReceipt) {
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/?text=${generateWhatsAppMessage()}`;
        window.open(whatsappUrl, "_blank");
      }

      toast.success("Registration submitted successfully! Please check your email for confirmation.");
      
      // Reset form
      setFormData({
        name: "",
        nickname: "",
        email: "",
        phone: "",
        groupName: "",
        fromAbroad: false,
        needAccommodation: false,
        attendAfterParty: false,
        whatsappReceipt: false,
      });
      
      setOpen(false);
    } catch (error) {
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className || "bg-primary text-primary-foreground hover:bg-primary/90"}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Black History Month Celebration</DialogTitle>
          <DialogDescription>
            Register for our event (16/17 October 2026) - £75 for 2 days
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-bold">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nickname" className="text-sm font-bold">
                  Capoeira Nickname <span className="text-muted-foreground text-xs">(Optional)</span>
                </Label>
                <Input
                  id="nickname"
                  name="nickname"
                  placeholder="Your capoeira name"
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-bold">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 123 456 7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="groupName" className="text-sm font-bold">
                Group Name
              </Label>
              <Input
                id="groupName"
                name="groupName"
                placeholder="Your group or organization name"
                value={formData.groupName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Event Options */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h3 className="font-bold text-primary">Ticket Type</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTicketType("1-day")}
                className={`p-4 rounded-lg border-2 transition-all font-bold ${
                  ticketType === "1-day"
                    ? "border-secondary bg-secondary/10 text-primary"
                    : "border-border bg-white text-muted-foreground hover:border-secondary"
                }`}
              >
                1 Day
                <div className="text-lg text-secondary">£50</div>
              </button>
              <button
                type="button"
                onClick={() => setTicketType("2-day")}
                className={`p-4 rounded-lg border-2 transition-all font-bold ${
                  ticketType === "2-day"
                    ? "border-secondary bg-secondary/10 text-primary"
                    : "border-border bg-white text-muted-foreground hover:border-secondary"
                }`}
              >
                2 Days
                <div className="text-lg text-secondary">£75</div>
              </button>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fromAbroad"
                  name="fromAbroad"
                  checked={formData.fromAbroad}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, fromAbroad: checked as boolean }))
                  }
                />
                <Label htmlFor="fromAbroad" className="font-medium cursor-pointer">
                  I am coming from abroad
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="needAccommodation"
                  name="needAccommodation"
                  checked={formData.needAccommodation}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, needAccommodation: checked as boolean }))
                  }
                />
                <Label htmlFor="needAccommodation" className="font-medium cursor-pointer">
                  I need help with accommodation
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="attendAfterParty"
                  name="attendAfterParty"
                  checked={formData.attendAfterParty}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, attendAfterParty: checked as boolean }))
                  }
                />
                <Label htmlFor="attendAfterParty" className="font-medium cursor-pointer">
                  I will participate in the after party
                </Label>
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded p-3 mt-4">
              <p className="text-sm font-bold text-primary">Event Price: <span className="text-secondary">{ticketType === "1-day" ? "£50" : "£75"}</span></p>
              <p className="text-xs text-muted-foreground">{ticketType === "1-day" ? "1 day" : "2 days"} event (16/17 October 2026)</p>
            </div>
          </div>

          {/* WhatsApp Receipt */}
          <div className="space-y-4 bg-accent/5 p-4 rounded-lg">
            <h3 className="font-bold text-primary">Receipt Delivery</h3>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsappReceipt"
                name="whatsappReceipt"
                checked={formData.whatsappReceipt}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, whatsappReceipt: checked as boolean }))
                }
              />
              <Label htmlFor="whatsappReceipt" className="font-medium cursor-pointer">
                Send receipt via WhatsApp
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              We will send your registration confirmation and receipt details via WhatsApp
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register for Event"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
