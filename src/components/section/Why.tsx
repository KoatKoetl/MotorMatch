import Title from '../Title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function Why() {
  return (
    <div>
      <Title className="text-3xl font-bold text-gray-800 mb-4">Why Choose our Service?</Title>
      <p>Here are common FAQ.</p>
      <div className="mt-10 flex gap-10 justify-center items-center lg:justify-between flex-col lg:flex-row">
        <Accordion type="single" collapsible className="w-full max-w-xl" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Extensive Inventory</AccordionTrigger>
            <AccordionContent>
              MotorMatch aggregates listings from multiple websites, providing you with a vast selection of cars to choose from. Whether
              you're looking for a new or used vehicle, you can easily find the perfect match.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>User-Friendly Interface</AccordionTrigger>
            <AccordionContent>
              MotorMatch offers a seamless and intuitive browsing experience. The advanced search filters allow you to narrow down your
              options based on make, model, price, location, and other preferences, making the car-buying process efficient and enjoyable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comprehensive Information</AccordionTrigger>
            <AccordionContent>
              Each car listing on MotorMatch includes detailed descriptions, high-quality images, and key specifications. This ensures you
              have all the information you need to make an informed decision without having to visit multiple websites.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Reliable and Secure</AccordionTrigger>
            <AccordionContent>
              MotorMatch prioritizes your safety and satisfaction. By redirecting you to the original listing websites for transactions,
              MotorMatch ensures that you are dealing with verified sellers, providing peace of mind and a trustworthy car-buying
              experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <img src="/images/hero/6.jpg" alt="" className="max-w-sm rounded-lg" />
        </div>
      </div>
    </div>
  );
}
