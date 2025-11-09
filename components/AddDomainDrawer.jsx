import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";


export function AddDomainDrawer({ open, onOpenChange, onAdd }) {
  const [step, setStep] = useState(1);
  const [domainName, setDomainName] = useState("");
  const [verified, setVerified] = useState(false);

  const handleNext = () => {
    if (!domainName) {
      toast.error("Please enter a domain name");
      return;
    }
    setStep(2);
  };

  const handleVerify = () => {
    // Simulate verification
    setVerified(true);
    toast.success("Domain verified successfully!");
  };

  const handleSave = () => {
    onAdd({
      name: domainName,
      verified,
    });
    setDomainName("");
    setStep(1);
    setVerified(false);
    onOpenChange(false);
    toast.success("Domain added successfully!");
  };

  const handleClose = () => {
    setDomainName("");
    setStep(1);
    setVerified(false);
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Add New Domain</DrawerTitle>
            <DrawerDescription>
              {step === 1 ? "Enter your domain name" : "Verify domain ownership"}
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 space-y-4">
            {step === 1 ? (
              <div className="space-y-2">
                <Label htmlFor="domain-name">Domain Name</Label>
                <Input
                  id="domain-name"
                  placeholder="example.com"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <div className="mb-3">
                    <p className="text-sm font-medium mb-2">Domain:</p>
                    <p className="text-sm text-muted-foreground">{domainName}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">DNS Verification Status:</p>
                    {verified ? (
                      <Badge className="bg-success text-success-foreground">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge className="bg-warning text-warning-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>

                {!verified && (
                  <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                    <p className="text-sm font-medium">Add this TXT record to your DNS:</p>
                    <code className="block text-xs bg-muted p-2 rounded">
                      kerjamail-verify=abc123xyz789
                    </code>
                  </div>
                )}
              </div>
            )}
          </div>

          <DrawerFooter>
            {step === 1 ? (
              <>
                <Button onClick={handleNext}>Next</Button>
                <DrawerClose asChild>
                  <Button variant="outline" onClick={handleClose}>
                    Cancel
                  </Button>
                </DrawerClose>
              </>
            ) : (
              <>
                <div className="flex gap-2 w-full">
                  {!verified && (
                    <Button onClick={handleVerify} className="flex-1">
                      Verify DNS
                    </Button>
                  )}
                  <Button onClick={handleSave} className="flex-1">
                    Save Domain
                  </Button>
                </div>
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
              </>
            )}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
