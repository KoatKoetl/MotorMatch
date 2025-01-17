import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { PackagePlusIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { useAddProductMutation } from '../../redux/api';
import Title from '../Title';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Product name is required.',
    })
    .min(2, {
      message: 'Product name must be at least 2 characters.',
    }),
  brand: z
    .string({
      required_error: 'Brand name is required.',
    })
    .min(2, {
      message: 'Brand name must be at least 2 characters.',
    }),
  price: z
    .string({
      required_error: 'Price is required.',
    })
    .min(1, {
      message: 'Price is required.',
    }),
  description: z
    .string({
      required_error: 'Description is required.',
    })
    .min(2, { message: 'Description must be at least 2 characters long.' }),
  quantity: z
    .string({
      required_error: 'Quantity is required.',
    })
    .min(1, {
      message: 'Quantity is required.',
    }),
  rating: z
    .string({
      required_error: 'Rating is required.',
    })
    .min(1, {
      message: 'Rating is required.',
    })
    .max(5, {
      message: 'Rating must be between 1 and 5.',
    }),
  image: z
    .string({
      required_error: 'Image is required.',
    })
    .url()
    .min(1, {
      message: 'Image is required.',
    }),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(1, {
      message: 'Password is required.',
    }),
});

export default function AddProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [addProduct, { isLoading }] = useAddProductMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const slug = values.name.replace(/\s/g, '-').toLowerCase();
    const res = await addProduct({ slug, ...values });
    if (res.data.success) {
      toast.success(`${res.data.message}`);
    } else {
      toast.error(`${res.data.message}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-xl p-8 border rounded-lg mb-10">
        <Title>
          <PackagePlusIcon /> Add New Product
        </Title>
        <p>Please fill out the form below to add a new product to the inventory.</p>
        <div className="flex gap-2 *:w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input min={1} max={200000000} type="number" placeholder="product price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input placeholder="brand name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 *:w-full">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available Quantity</FormLabel>
                <FormControl>
                  <Input type="number" min={1} placeholder="available quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={5} placeholder="rating" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Url</FormLabel>
              <FormControl>
                <Input placeholder="image url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="auth password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={
            form.formState.isLoading ||
            form.formState.isSubmitting ||
            form.formState.isValidating ||
            // !form.formState.isDirty ||
            // !form.formState.isValid ||
            isLoading
          }
          type="submit"
        >
          {isLoading ? 'Submitting..' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}
