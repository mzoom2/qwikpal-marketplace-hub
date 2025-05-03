
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, ArrowRight, DollarSign } from 'lucide-react';

// Form validation schema
const productFormSchema = z.object({
  category: z.string().min(1, "Category is required"),
  productType: z.string().min(1, "Product type is required"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  previewLink: z.string().url().optional().or(z.literal('')),
  price: z.string().min(1, "Price is required"),
  discount: z.string().optional(),
  salesLimit: z.enum(["single", "limited", "unlimited"]),
  limitedQuantity: z.string().optional(),
  deliveryType: z.enum([
    "loginDetails", 
    "pdfFile", 
    "softwareLink", 
    "link", 
    "numberRent", 
    "apiKey", 
    "giftCard"
  ]),
  // Specific fields for delivery types will be handled conditionally
});

type ProductFormValues = z.infer<typeof productFormSchema>;

const ProductListingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      category: "",
      productType: "",
      title: "",
      description: "",
      previewLink: "",
      price: "",
      discount: "",
      salesLimit: "unlimited",
      limitedQuantity: "",
      deliveryType: "loginDetails",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const onSubmit = (values: ProductFormValues) => {
    console.log("Form submitted with values:", values);
    // Here you would typically send the data to your backend
  };
  
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const goToPrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const categories = [
    "Social Media Accounts",
    "Software",
    "Digital Services",
    "AI Tools",
    "Gift Cards",
    "Websites & Domains",
    "Educational Resources",
    "Digital Art & NFTs"
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Select Product Category & Type</h2>
              <p className="text-gray-500">Choose the category and specific type for your product</p>
            </div>
            
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the main category for your product
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram Account</SelectItem>
                        <SelectItem value="facebook">Facebook Page</SelectItem>
                        <SelectItem value="twitter">Twitter Account</SelectItem>
                        <SelectItem value="software">Application Software</SelectItem>
                        <SelectItem value="wordpress">WordPress Theme</SelectItem>
                        <SelectItem value="design">Design Template</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the specific type of product you're listing
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end mt-8">
              <Button 
                type="button" 
                onClick={goToNextStep}
                className="bg-qwikpal-teal hover:bg-qwikpal-teal/90"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        );
        
      case 2:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Upload Image</h2>
              <p className="text-gray-500">Upload a clear, high-quality image for your product</p>
            </div>
            
            <div className="space-y-6">
              <FormItem>
                <FormLabel>Product Image</FormLabel>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-qwikpal-teal transition-colors">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    className="hidden" 
                    id="product-image" 
                  />
                  <label htmlFor="product-image" className="cursor-pointer text-center">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img 
                          src={imagePreview} 
                          alt="Product preview" 
                          className="mx-auto h-48 object-contain" 
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="text-qwikpal-teal border-qwikpal-teal"
                        >
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="mx-auto bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                          <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-qwikpal-teal">Click to upload</p>
                          <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
                <FormDescription>
                  A clear, professional image helps your product sell faster
                </FormDescription>
              </FormItem>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={goToPrevStep}
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={goToNextStep}
                className="bg-qwikpal-teal hover:bg-qwikpal-teal/90"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        );
        
      case 3:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Title & Description</h2>
              <p className="text-gray-500">Provide detailed information about your product</p>
            </div>
            
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Instagram account with 10K followers"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A clear, specific title will attract more buyers
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your product in detail..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include all relevant details about your product to help buyers make an informed decision
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="previewLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preview Item Link (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/preview"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a link for buyers to preview your product (demo, sample, etc.)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={goToPrevStep}
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={goToNextStep}
                className="bg-qwikpal-teal hover:bg-qwikpal-teal/90"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        );
        
      case 4:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Price & Inventory</h2>
              <p className="text-gray-500">Set your pricing and inventory options</p>
            </div>
            
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input 
                          type="number"
                          min="0" 
                          step="0.01"
                          className="pl-10"
                          placeholder="0.00"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Amount ($) (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input 
                          type="number"
                          min="0" 
                          step="0.01"
                          className="pl-10"
                          placeholder="0.00"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Enter a discount amount if you want to offer a special price
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="salesLimit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sales Limit</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a sales limit option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="single">Single Sale (One-time)</SelectItem>
                        <SelectItem value="limited">Limited Sales</SelectItem>
                        <SelectItem value="unlimited">Unlimited Sales</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose how many times this product can be sold
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {form.watch("salesLimit") === "limited" && (
                <FormField
                  control={form.control}
                  name="limitedQuantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Available</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1"
                          placeholder="Enter quantity"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={goToPrevStep}
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={goToNextStep}
                className="bg-qwikpal-teal hover:bg-qwikpal-teal/90"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        );
        
      case 5:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Delivery Details</h2>
              <p className="text-gray-500">Specify what buyers will receive after purchase</p>
            </div>
            
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="deliveryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="loginDetails">Login Details</SelectItem>
                        <SelectItem value="pdfFile">PDF File or Video</SelectItem>
                        <SelectItem value="softwareLink">Software File Link</SelectItem>
                        <SelectItem value="link">Link or Domain</SelectItem>
                        <SelectItem value="numberRent">Number for Rent</SelectItem>
                        <SelectItem value="apiKey">API Keys or License Key</SelectItem>
                        <SelectItem value="giftCard">Gift Card Code</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose what the buyer will receive upon purchase
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="bg-gray-50 rounded-lg p-4 mt-2">
                <h3 className="font-medium text-lg mb-4">Delivery Information</h3>
                
                <Tabs defaultValue={form.watch("deliveryType")} value={form.watch("deliveryType")}>
                  <TabsContent value="loginDetails">
                    <div className="space-y-4">
                      <Input placeholder="Platform URL (e.g., instagram.com)" />
                      <Input placeholder="Username" />
                      <Input placeholder="Password" type="password" />
                      <Textarea 
                        placeholder="Use guide (Instructions for the buyer)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pdfFile">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm font-medium text-qwikpal-teal">Click to upload PDF or video</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, MP4, AVI, MOV (max. 100MB)</p>
                      </div>
                      <Textarea 
                        placeholder="Use guide (Explain how to use the contents of the file)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="softwareLink">
                    <div className="space-y-4">
                      <Input placeholder="Software download link" />
                      <Textarea 
                        placeholder="Use guide (Installation instructions, system requirements)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="link">
                    <div className="space-y-4">
                      <Input placeholder="Website link or online resource" />
                      <Textarea 
                        placeholder="Use guide (How to navigate or utilize the link)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="numberRent">
                    <div className="space-y-4">
                      <Input placeholder="Phone number" />
                      <Textarea 
                        placeholder="Use guide (How to use the number, duration, limitations)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="apiKey">
                    <div className="space-y-4">
                      <Input placeholder="API Key or License Key" />
                      <Textarea 
                        placeholder="Use guide (How to activate or integrate the key)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="giftCard">
                    <div className="space-y-4">
                      <Input placeholder="Gift card code" />
                      <Textarea 
                        placeholder="Use guide (Redemption steps and where to use the code)" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={goToPrevStep}
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={goToNextStep}
                className="bg-qwikpal-teal hover:bg-qwikpal-teal/90"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        );
        
      case 6:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Review & List Product</h2>
              <p className="text-gray-500">Review your product listing before publishing</p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-500 mb-1">Category & Type</h3>
                    <p>{form.getValues("category")} - {form.getValues("productType")}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-1">Product Image</h3>
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Product" 
                        className="h-20 w-20 object-cover rounded-md" 
                      />
                    ) : (
                      <p className="text-sm italic">No image uploaded</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-1">Product Title</h3>
                    <p>{form.getValues("title")}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-1">Price</h3>
                    <p>${form.getValues("price")}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="font-medium text-gray-500 mb-1">Description</h3>
                    <p className="whitespace-pre-wrap">{form.getValues("description")}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-1">Sales Limit</h3>
                    <p className="capitalize">{form.getValues("salesLimit")}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-1">Delivery Type</h3>
                    <p className="capitalize">{form.getValues("deliveryType").replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={goToPrevStep}
              >
                Back
              </Button>
              <Button 
                type="submit"
                className="bg-qwikpal-blue hover:bg-qwikpal-blue/90"
              >
                List Product
              </Button>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>List a New Product</CardTitle>
        <CardDescription>
          Complete all steps to list your product on QwikPal Marketplace
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div 
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium 
                  ${currentStep >= step ? 'bg-qwikpal-teal text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                {step}
              </div>
            ))}
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-qwikpal-teal h-full rounded-full transition-all duration-300" 
              style={{ width: `${(currentStep - 1) * 20}%` }} 
            />
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {renderStepContent()}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductListingForm;
