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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function AddMailboxDrawer({
  open,
  onOpenChange,
  onAdd,
  domains,
}) {
  const [username, setUsername] = useState("");
  const [domain, setDomain] = useState("");
  const [quota, setQuota] = useState("5");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!username || !domain || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    onAdd({
      username,
      domain,
      quota: `${quota} GB`,
      password,
    });

    // Reset form
    setUsername("");
    setDomain("");
    setQuota("5");
    setPassword("");
    onOpenChange(false);
    toast.success("Mailbox created successfully!");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Add New Mailbox</DrawerTitle>
            <DrawerDescription>Create a new email mailbox</DrawerDescription>
          </DrawerHeader>

          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="domain">Domain</Label>
              <Select value={domain} onValueChange={setDomain}>
                <SelectTrigger id="domain">
                  <SelectValue placeholder="Select domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quota">Quota (GB)</Label>
              <Select value={quota} onValueChange={setQuota}>
                <SelectTrigger id="quota">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 GB</SelectItem>
                  <SelectItem value="10">10 GB</SelectItem>
                  <SelectItem value="20">20 GB</SelectItem>
                  <SelectItem value="50">50 GB</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <DrawerFooter>
            <Button onClick={handleSave}>Create Mailbox</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
