import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WhatsAppInquiryProps {
  productName: string;
  modelNumber: string;
  price: number;
  className?: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  // mobile: z.string().min(10, { message: "Please enter a valid mobile number" }),
  message: z.string().optional()
});

const WhatsAppInquiry = ({ productName, modelNumber, price, className }: WhatsAppInquiryProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      // mobile: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Format the detailed inquiry message
      const message = `
🏷️ *Product Inquiry Details*

📦 *Product Information:*
• Product: ${productName}
• Model: ${modelNumber}
• Price: ₹${price.toLocaleString()}

👤 *Customer Details:*
• Name: ${values.name}
${values.message ? `• Message: ${values.message}` : ''}

🕒 *Inquiry Time:* ${new Date().toLocaleString()}

Please contact me with more details about this product. Thank you! 🙏
      `.trim();
      
      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      
      // WhatsApp business number
      const phoneNumber = "9331962120";
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Simulate brief processing delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
      // Close the dialog
      setOpen(false);
      
      // Reset form
      form.reset();
      
      // Show success message
      toast({
        title: "Redirecting to WhatsApp!",
        description: "Your inquiry has been prepared and will open in WhatsApp.",
      });
      
    } catch (error) {
      toast({
        title: "Failed to prepare inquiry",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 ${className || ''}`}>
          <MessageSquare className="mr-2 h-4 w-4" /> Request Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Product Inquiry Form
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Product Summary */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Product Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Product:</span>
                <p className="font-medium">{productName}</p>
              </div>
              <div>
                <span className="text-gray-600">Model:</span>
                <p className="font-medium">{modelNumber}</p>
              </div>
              <div className="col-span-2">
                <span className="text-gray-600">Price:</span>
                <p className="text-lg font-bold text-green-600">₹{price.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Redirect Notice */}
          <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800">WhatsApp Inquiry</h4>
                <p className="text-sm text-green-700 mt-1">
                  After submitting this form, you'll be redirected to WhatsApp with all your details pre-filled. 
                  Simply press send to contact our sales team.
                </p>
              </div>
            </div>
          </div>

          {/* Google Form Style Form */}
          <div className="space-y-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                All fields are required
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="focus:ring-2 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Additional Message (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific requirements or questions about this product?"
                          {...field} 
                          className="min-h-[100px] focus:ring-2 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Form Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Preparing...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="mr-2 h-4 w-4" /> Submit to WhatsApp
                      </>
                    )}
                  </Button>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you'll be redirected to WhatsApp to send your inquiry to our sales team.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppInquiry;