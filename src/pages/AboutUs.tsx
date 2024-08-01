import { Atom, Facebook, FileQuestion, Github, Linkedin, Milestone, TimerReset, Twitch, Users2 } from 'lucide-react';
import { useEffect } from 'react';
import Title from '../components/Title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-10">
      <div>
        <Title className="mb-4">
          <Atom /> About Us
        </Title>
        <p className="text-zinc-600 mb-6">
          At MotorMatch, we are dedicated to transforming your car-buying experience with our comprehensive and user-friendly platform.
          Since our inception, we have strived to merge cutting-edge technology with unmatched convenience, providing you with an extensive
          selection of vehicles from trusted sources.
        </p>
        <p className="text-zinc-600">
          Our team of passionate professionals is committed to quality, innovation, and customer satisfaction. Join us on our mission to
          redefine how you find and buy your perfect car.
        </p>
      </div>
      <OurStory />
      <div className="flex justify-between gap-10 *:w-full my-12 md:flex-row flex-col">
        <MileStones />
        <WhatWeDo />
      </div>
      <OurTeam />
    </div>
  );
};

export default AboutUs;

const OurStory = () => {
  return (
    <section className="my-12">
      <Title className="mb-4">
        <TimerReset /> Our Story
      </Title>
      <p className="text-zinc-600 mb-4">
        Welcome to MotorMatch, where our passion for cars meets innovation. Founded with the goal of revolutionizing the car-buying
        experience, MotorMatch started with a simple idea: to create a comprehensive, user-friendly platform that connects car buyers with
        their perfect vehicles from trusted sources.
      </p>
      <p className="text-zinc-600 mb-4">
        Our journey began with a small team of dedicated automotive enthusiasts who shared a love for cars and a commitment to simplifying
        the buying process. Over time, we have grown into a renowned platform known for our dedication to quality, innovation, and customer
        satisfaction.
      </p>
      <p className="text-zinc-600 mb-4">
        At MotorMatch, we believe that buying a car is more than just a transaction – it’s a significant decision that requires reliable
        information and a seamless experience. That's why we offer a wide range of customizable options, from make and model filters to
        price range, mileage, and fuel type preferences. Our platform is designed to cater to your unique needs, whether you're searching
        for a family vehicle, a luxury car, or your first ride.
      </p>
      <p className="text-zinc-600">
        We are proud to be a part of the automotive community and are committed to continuous innovation and improvement. Thank you for
        joining us on this journey, and we look forward to helping you find and buy the car that matches your needs and preferences.
      </p>
    </section>
  );
};

const MileStones = () => {
  return (
    <section>
      <Title className="mb-4">
        <Milestone /> Milestones
      </Title>
      <ul className="list-disc list-inside text-gray-600">
        <li>2018: MotorMatch founded with a mission to revolutionize the car-buying experience.</li>
        <li>2019: Launched our platform, featuring an extensive selection of new and used cars from trusted sources.</li>
        <li>2020: Introduced advanced search filters, allowing users to customize their car search with ease.</li>
        <li>2021: Expanded our database to include international car listings, broadening our reach and offerings.</li>
        <li>2022: Reached a significant milestone of helping over 100,000 users find their perfect car.</li>
        <li>2023: Implemented AI-driven recommendations, enhancing the user experience with personalized car suggestions.</li>
        <li>2024: Recognized as a leading platform in the automotive industry, known for innovation and customer satisfaction.</li>
      </ul>
    </section>
  );
};

const WhatWeDo = () => (
  <section>
    <Title className="mb-4">
      <FileQuestion /> What We Do
    </Title>
    <p className="text-gray-600 mb-4">
      At MotorMatch, we specialize in providing a comprehensive, user-friendly platform for finding and buying cars. Our mission is to
      simplify the car-buying process and connect users with their perfect vehicles from trusted sources.
    </p>
    <p className="text-gray-600 mb-4">Our offerings include:</p>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Extensive Car Listings: A wide selection of new and used cars from various trusted websites.</li>
      <li>
        Advanced Search Filters: Customizable options to narrow down car searches by make, model, price range, year, mileage, location, body
        type, and fuel type.
      </li>
      <li>Detailed Car Information: Comprehensive descriptions, high-quality images, and key specifications for each listing.</li>
      <li>User-Friendly Interface: An intuitive platform designed to provide a seamless browsing and buying experience.</li>
    </ul>
    <p className="text-gray-600">
      We are committed to innovation and quality, ensuring that every feature we implement meets the highest standards. Our team
      continuously works on enhancing the platform and introducing new functionalities to bring you the best in car-buying experiences.
    </p>
  </section>
);

const OurTeam = () => (
  <section className="my-12">
    <Title className="mb-10">
      <Users2 /> Our Team
    </Title>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="team-member text-center">
        <CardHeader>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format"
            alt="John Doe"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-medium">John Doe</CardTitle>
          <CardDescription className="text-gray-500">CEO & Founder</CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Linkedin />
          </a>
          <a href="https://github.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Github />
          </a>
          <a href="https://www.facebook.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Facebook />
          </a>
          <a href="https://www.twitch.tv" target="blank" className="hover:text-gray-500 transition-colors">
            <Twitch />
          </a>
        </CardFooter>
      </Card>
      <Card className="team-member text-center">
        <CardHeader>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format"
            alt="Jane Smith"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-medium">John Doe</CardTitle>
          <CardDescription className="text-gray-500">CEO & Founder</CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Linkedin />
          </a>
          <a href="https://github.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Github />
          </a>
          <a href="https://www.facebook.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Facebook />
          </a>
          <a href="https://www.twitch.tv" target="blank" className="hover:text-gray-500 transition-colors">
            <Twitch />
          </a>
        </CardFooter>
      </Card>
      <Card className="team-member text-center">
        <CardHeader>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format"
            alt="Michael Brown"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-medium">John Doe</CardTitle>
          <CardDescription className="text-gray-500">CEO & Founder</CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Linkedin />
          </a>
          <a href="https://github.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Github />
          </a>
          <a href="https://www.facebook.com" target="blank" className="hover:text-gray-500 transition-colors">
            <Facebook />
          </a>
          <a href="https://www.twitch.tv" target="blank" className="hover:text-gray-500 transition-colors">
            <Twitch />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
);
